import {tree, comment} from "../models/tree-schema";
import {User} from "../models/user-schema";
import {Log} from "../models/log-schema";
import {nameByRace} from "fantasy-name-generator";

const getTreesAround100m = async coordinates => {
    const forest = await tree.find({
        position: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates,
                },
                $minDistance: 0.1,
                $maxDistance: 100,
            },
        },
    });
    return forest;
};

exports.getPackOfRandomTrees = (callback, retry = 10, packSize = 3) => {
    if (retry === 0) {
        callback("Not find a good starting point", null);
    } else {
        const starterPack = [];
        tree.aggregate([{$match: {owner: null}}, {$sample: {size: 1}}])
            .then(result => {
                starterPack.push(result[0]);
                tree.find({
                    position: {
                        $near: {
                            $geometry: {
                                type: "Point",
                                coordinates:
                                    starterPack[0].position.coordinates,
                            },
                            $minDistance: 0.1,
                            $maxDistance: 100,
                        },
                    },
                    owner: null,
                })
                    .limit(2)
                    .then(trees => {
                        starterPack.push(...trees);
                        if (starterPack.length < packSize) {
                            const nbrRetry = retry - 1;
                            //eslint-disable-next-line
                            getPackOfRandomTrees(callback, nbrRetry);
                        } else {
                            callback(null, starterPack);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        callback(err, null);
                    });
            })
            .catch(err => {
                console.log(err);
                callback(err, null);
            });
    }
};

exports.allTreesByViewport = async (req, res) => {
    try {
        const trees = await tree
            .find({
                position: {
                    $geoWithin: {
                        $box: [
                            [req.body._southWest.lng, req.body._southWest.lat],
                            [req.body._northEast.lng, req.body._northEast.lat],
                        ],
                    },
                },
            })
            .populate("buyHistory.user", "username")
            .populate("owner", "username color");

        res.status(200).json(trees).end();
    } catch (e) {
        res.status(500).json(e).end();
    }
};

exports.getTreeData = (req, res) => {
    if (req.params.treeId) {
        tree.findById(req.params.treeId, {comments: 0})
            .populate("buyHistory.user", "username")
            .populate("owner", "username color")
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    } else {
        res.status(400).send("NEED a tree ID ");
    }
};

exports.resetTrees = (_, res) => {
    tree.updateMany(
        {},
        {owner: null, isLocked: false, name: null, buyHistory: []},
    )
        .then(result => {
            res.status(205).send(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

//#region comment trees

const validateComment = body => body.comment && body.comment.message;

exports.getComments = async (req, res) => {
    if (req.params.treeId) {
        try {
            const treeData = await tree
                .findById(req.params.treeId)
                .populate("comments.author", "username");
            res.status(200).json(treeData.comments);
        } catch (e) {
            res.status(400).json({Error: e.toString()});
        }
    } else {
        res.status(500).end();
    }
};

exports.writeComment = async (req, res) => {
    if (req.params.treeId) {
        try {
            const treeToWrite = await tree.findById(req.params.treeId);
            if (validateComment(req.body)) {
                const commentData = new comment();
                commentData.msg = req.body.comment.message;
                commentData.author = req.userId;
                treeToWrite.comments.push(commentData);
                await treeToWrite.save();
                const log = new Log();
                log.msg = `Comment post on tree ${treeToWrite.name}`;
                log.author = req.userId;
                await log.save();
                res.status(201).end();
            } else {
                res.status(400).json({Error: "Invalid comment"});
            }
        } catch (e) {
            res.status(400).json({Error: e.toString()});
        }
    } else {
        res.status(500).end();
    }
};

//#endregion

//#region Locking Trees

const calculateLockPrice = async (treeToLock, player) => {
    const treesAround = await getTreesAround100m(
        treeToLock.position.coordinates,
    );
    const vArbres = treesAround.reduce((acc, {value}) => acc + value, 0);
    const nbrPlayer = treesAround.reduce((acc, {owner}) => {
        if (owner) {
            if (acc.has(owner)) {
                acc.set(owner, acc.get(owner) + 1);
            } else {
                acc.set(owner, 1);
            }
        }
        return acc;
    }, new Map()).size;

    const vArbresPlayer = treesAround
        .filter(t => {
            if (t.owner) {
                return t.owner.toString() === player._id.toString();
            }
            return false;
        })
        .reduce((acc, {value}) => acc + value, 0);

    const lockValue = Math.ceil(
        treeToLock.value * 10 +
            vArbres * nbrPlayer -
            (nbrPlayer > 0 ? vArbresPlayer / nbrPlayer : 0),
    );
    return lockValue;
};

const getLockPrice = async (treeToLock, player) => {
    if (treeToLock.owner) {
        if (treeToLock.owner._id.toString() === player._id.toString()) {
            if (!treeToLock.isLocked) {
                const price = await calculateLockPrice(treeToLock, player);
                return price;
            }
            throw new Error("Tree already lock");
        } else {
            throw new Error("Cannot lock not owned trees");
        }
    } else {
        throw new Error("Cannot lock neutral Trees");
    }
};

exports.lockTree = async (req, res) => {
    if (req.params.treeId) {
        try {
            const player = await User.findById(req.userId).exec();
            const treeToLock = await tree
                .findById(req.params.treeId)
                .populate("owner", "username")
                .exec();
            const amount = await getLockPrice(treeToLock, player);
            if (player.totalLeaves >= amount) {
                treeToLock.isLocked = true;
                treeToLock.save();
                player.totalLeaves -= amount;
                const updated = player.save();

                const log = new Log();
                log.msg = `${player.username} lock one of his trees !`;
                log.author = player._id;
                log.save();
                res.status(200).send(updated.totalLeaves);
            } else {
                res.status(402).json({Error: `Not enough leaves : ${amount}`});
            }
        } catch (e) {
            res.status(400).json({Error: e.toString()});
        }
    } else {
        res.status(400).json({Error: "Need TreeId"});
    }
};

exports.lockPrice = async (req, res) => {
    try {
        const player = await User.findById(req.userId).exec();
        const treeToLock = await tree.findById(req.params.treeId).exec();
        const price = await getLockPrice(treeToLock, player);
        res.status(200).json({price});
    } catch (e) {
        res.status(400).json({error: e.toString()});
    }
};

//#endregion

//#region Buying Trees
const getUniqueName = (retry = 15) => {
    if (retry === 0) {
        throw new Error("NAME GENERATOR FAIL");
    }
    const name = nameByRace("highelf", {
        gender: Math.round(Math.random()) ? "male" : "female",
    });
    try {
        const notUnique = tree.findOne({name});

        const nbrRetry = retry - 1;
        console.log({notUnique, nbrRetry});
        getUniqueName(nbrRetry);
    } catch (e) {
        return name;
    }
    return false;
};

const calculateBuyPrice = async (treeToBuy, buyer) => {
    const treesAround = await getTreesAround100m(
        treeToBuy.position.coordinates,
    );

    const enemyTree = treesAround.filter(t => {
        if (t.owner) {
            return t.owner.toString() === treeToBuy.owner._id.toString();
        }
        return false;
    });
    const amountEnemyTree = enemyTree.length;
    const enemyTreesValue = enemyTree.reduce((acc, {value}) => acc + value, 0);

    const vBuyerTrees = treesAround
        .filter(t => {
            if (t.owner) {
                return t.owner.toString() === buyer._id.toString();
            }
            return false;
        })
        .reduce((acc, {value}) => acc + value, 0);

    const vOtherPlayerTrees = treesAround
        .filter(
            t =>
                t.owner &&
                t.owner.toString() !== buyer._id.toString() &&
                t.owner.toString() !== treeToBuy.owner._id.toString(),
        )
        .reduce((acc, {value}) => acc + value, 0);

    const value = Math.ceil(
        treeToBuy.value +
            enemyTreesValue *
                (amountEnemyTree > 0
                    ? treesAround.length / amountEnemyTree
                    : 0) +
            vOtherPlayerTrees -
            vBuyerTrees,
    );
    return value;
};

const closeTheDeal = (amount, buyer, treeToBuy) => {
    if (buyer.totalLeaves >= amount) {
        treeToBuy.owner = buyer._id;
        treeToBuy.buyHistory.push({
            date: new Date(),
            user: buyer._id,
        });
        if (treeToBuy.name === null) {
            try {
                const name = getUniqueName();
                console.log({name});
                treeToBuy.name = name;
                return treeToBuy.save();
            } catch (e) {
                throw new Error(e.toString());
            }
        } else {
            return treeToBuy.save();
        }
    } else {
        throw new Error("Not enougth leaves");
    }
};

const getBuyingPrice = async (treeToBuy, buyer) => {
    if (treeToBuy.owner !== null) {
        if (treeToBuy.isLocked === false) {
            if (treeToBuy.owner._id.toString() !== buyer._id.toString()) {
                const price = await calculateBuyPrice(treeToBuy, buyer);
                return price;
            }
            throw new Error("Cannot buy your own tree !");
        } else {
            throw new Error("Cannot buy locked tree");
        }
    } else {
        return treeToBuy.value;
    }
};

exports.buyPrice = async (req, res) => {
    if (req.params.treeId) {
        try {
            const buyer = await User.findById(req.userId).exec();
            const treeToBuy = await tree.findById(req.params.treeId).exec();
            const price = await getBuyingPrice(treeToBuy, buyer);
            res.status(200).json({price});
        } catch (e) {
            res.status(400).json(e.toString());
        }
    } else {
        res.status(400).json({error: "Need a treeId"});
    }
};

exports.buyTree = async (req, res) => {
    if (req.params.treeId) {
        try {
            const buyer = await User.findById(req.userId).exec();
            const treeToBuy = await tree
                .findById(req.params.treeId)
                .populate("owner", "username")
                .exec();
            const message = treeToBuy.owner
                ? `Buy back the tree from ${treeToBuy.owner.username}`
                : "Buy a tree";
            const amount = await getBuyingPrice(treeToBuy, buyer);
            await closeTheDeal(amount, buyer, treeToBuy);
            buyer.totalLeaves = buyer.totalLeaves - amount;
            const buyerUpdated = buyer.save();

            const log = new Log();
            log.message = message;
            log.author = buyer._id;
            await log.save();
            res.status(202).json({remainingLeaves: buyerUpdated.totalLeaves});
        } catch (e) {
            res.status(400).json({error: e.toString()});
        }
    } else {
        res.status(400).json({error: "Need a treeId"});
    }
};

//#endregion

// tree.watch().on("change", (treeUpdated) => {
//     console.log({
//         updatedTree: treeUpdated.documentKey,
//         change: treeUpdated.operationType,
//     });
// });

// Log.watch().on("change", (data) => {
//     console.log({
//         Log: data.fullDocument.msg,
//     });
// });
