import {Router} from "express";
import treeController from "../controllers/tree-controller";
import auth from "../middlewares/authentification";
const router = Router();

router.post("/", treeController.allTreesByViewport);
router.get("/:treeId", treeController.getTreeData);
router.post("/:treeId/buy", auth, treeController.buyTree);
router.post("/:treeId/buyprice", auth, treeController.buyPrice);
router.post("/:treeId/lock", auth, treeController.lockTree);
router.post("/:treeId/lockprice", auth, treeController.lockPrice);
router.get("/:treeId/comments/", treeController.getComments);
router.post("/:treeId/comments/", auth, treeController.writeComment);
router.post("/reset", treeController.resetTrees);
module.exports = router;
