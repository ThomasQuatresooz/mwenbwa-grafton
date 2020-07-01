/* eslint-disable no-unused-vars, consistent-return */

import User from "../models/user-schema";
import {getStarterPack} from "./tree-controller";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                username: req.body.username,
                color: req.body.color,
            });
            user.save()
                .then(async userCreated => {
                    const trees = await getStarterPack();
                    const promises = [];
                    trees.forEach(tree => {
                        tree.owner = userCreated._id;
                        promises.push(tree.save());
                    });
                    await Promise.all(promises);
                    userCreated.startPosition = trees[0].position.coordinates;
                    await userCreated.save();
                    res.status(201).json({message: "Utilisateur créé !"});
                })
                .catch(error => res.status(400).json(error.toString()));
        })
        .catch(error => res.status(500).json({error}));
};

exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res
                    .status(401)
                    .json({error: "Utilisateur non trouvé !"});
            }
            bcrypt
                .compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res
                            .status(401)
                            .json({error: "Mot de passe incorrect !"});
                    }

                    res.status(200).json({
                        userId: user._id,
                        totalLeaves: user.totalLeaves,
                        startPosition: user.startPosition,
                        token: jwt.sign(
                            {userId: user._id},
                            "8hQ79YXx4ySOF2toKkRrScxrqY6zeORlkBWzxRYPjcyBVVlTeuVI9x2OyTrVx45",
                            {expiresIn: "24h"},
                        ),
                    });
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

exports.profile = (req, res, next) => {
    User.findById(req.body.userId).exec((error, user) => {
        if (error) {
            return next(error);
        }
        return res.render("profile");
    });
};
