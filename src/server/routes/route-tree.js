import {Router} from "express";
import {tree} from "../db/models/tree-schema";
const router = Router();

router.get("/", (req, res) => {
    tree.find({
        position: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [req.query.lng, req.query.lat],
                },
                $minDistance: req.query.meter,
                $maxDistance: req.query.meter + 500,
            },
        },
    })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.post("/", (req, res) => {
    console.log(req.body);

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
});

module.exports = router;
