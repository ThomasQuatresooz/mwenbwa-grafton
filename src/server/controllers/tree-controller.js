import {tree} from "../db/models/tree-schema";

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
        tree.find({_id: req.params.treeId})
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

exports.buyTree = req => {
    if (req.params.treeId) {
        console.log("DD");
    }
};
