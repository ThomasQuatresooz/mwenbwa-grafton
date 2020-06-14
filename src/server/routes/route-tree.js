import {Router} from "express";
import treeController from "../controllers/tree-controller";
import auth from "../db/middleware/authentification";
const router = Router();

router.post("/", treeController.allTreesByViewport);
router.post("/:treeId/lock", auth, treeController.lockTree);
router.post("/:treeId/buy", auth, treeController.buyTree);
router.get("/:treeId", treeController.getTreeData);
router.post("/reset", treeController.resetTrees);
module.exports = router;
