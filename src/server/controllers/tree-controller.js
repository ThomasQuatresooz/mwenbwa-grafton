import {tree} from "../db/models/tree-schema";
import {User} from "../db/models/user-schema";

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

const calculateBuyPrice = async (treeToBuy, buyer) => {
    const treesAround = await getTreesAround100m(
        treeToBuy.position.coordinates,
    );

    const enemyTree = treesAround.filter(
        t => t.owner.toString() === treeToBuy.owner.toString(),
    );
    const amountEnemyTree = enemyTree.length;
    const enemyTreesValue = enemyTree.reduce((acc, {value}) => acc + value, 0);

    const vBuyerTrees = treesAround
        .filter(t => t.owner.toString() === buyer._id.toString())
        .reduce((acc, {value}) => acc + value, 0);

    const vOtherPlayerTrees = treesAround
        .filter(
            t =>
                t.owner &&
                t.owner.toString() !== buyer._id.toString() &&
                t.owner.toString() !== treeToBuy.owner.toString(),
        )
        .reduce((acc, {value}) => acc + value, 0);

    const value = Math.ceil(
        treeToBuy.value +
            enemyTreesValue * (treesAround.length / amountEnemyTree) +
            vOtherPlayerTrees -
            vBuyerTrees,
    );
    return value;
};

const calculateLockPrice = async (treeToLock, player) => {
    const treesAround = await getTreesAround100m(
        treeToLock.position.coordinates,
    );
    const vArbres = treesAround.reduce((acc, {value}) => acc + value, 0);
    const nbrPlayer = treesAround.reduce((acc, {owner}) => {
        if (acc.has(owner)) {
            acc.set(owner, acc.get(owner) + 1);
        } else {
            acc.set(owner, 1);
        }
        return acc;
    }, new Map()).size;

    const vArbresPlayer = treesAround
        .filter(t => t.owner.toString() === player._id.toString())
        .reduce((acc, {value}) => acc + value, 0);

    const lockValue = Math.ceil(
        treeToLock.value * 10 + vArbres * nbrPlayer - vArbresPlayer / nbrPlayer,
    );
    return lockValue;
};

exports.allTreesByViewport = (req, res) => {
    tree.find({
        position: {
            $geoWithin: {
                $box: [
                    [req.body._southWest.lng, req.body._southWest.lat],
                    [req.body._northEast.lng, req.body._northEast.lat],
                ],
            },
        },
    })
        .then(result => {
            res.status(200).json(result).end();
        })
        .catch(err => {
            res.status(500).json(err).end();
        });
};

exports.getTreeData = (req, res) => {
    if (req.params.treeId) {
        tree.findById(req.params.treeId)
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

exports.buyTree = async (req, res) => {
    if (req.params.treeId) {
        try {
            const buyer = await User.findById(req.userId).exec();
            const treeToBuy = await tree.findById(req.params.treeId).exec();
            const amount =
                treeToBuy.owner == null
                    ? treeToBuy.value
                    : await calculateBuyPrice(treeToBuy, buyer);
            if (buyer.totalLeaves >= amount) {
                treeToBuy.owner = buyer._id;
                //TODO NAME GENERATOR
                await treeToBuy.save();
                buyer.totalLeaves -= amount;
                const updatedUser = await buyer.save();
                res.status(202).json({totalLeaves: updatedUser.totalLeaves});
            } else {
                res.status(402).send(`Not enough leaves : ${amount}`);
            }
        } catch (e) {
            res.status(400).send(`Error: ${e}`);
        }
    } else {
        res.status(400).send("Need TreeId");
    }
};

exports.lockTree = async (req, res) => {
    if (req.params.treeId) {
        try {
            const player = await User.findById(req.userId).exec();
            const treeToLock = await tree.findById(req.params.treeId).exec();

            if (treeToLock.owner.toString() === player._id.toString()) {
                const amount = await calculateLockPrice(treeToLock, player);
                console.log(amount);

                if (player.totalLeaves >= amount) {
                    treeToLock.isLocked = true;
                    treeToLock.save();
                    player.totalLeaves -= amount;
                    const updated = player.save();
                    res.status(200).send(updated.totalLeaves);
                } else {
                    res.status(402).send(`Not enough leaves : ${amount}`);
                }
            } else {
                res.status(403).send("Must be the owner of the tree");
            }
        } catch (e) {
            res.status(400).send(e);
        }
    }
};

exports.resetTrees = (_, res) => {
    tree.updateMany({}, {owner: null, isLocked: false})
        .then(result => {
            res.status(205).send(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};
