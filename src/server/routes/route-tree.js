import {Router} from "express";
import treeController from "../controllers/tree-controller";
const router = Router();

router.post("/", treeController.allTreesByViewport);
router.post("/:treeId/lock");
router.post("/:treeId/buy");
router.get("/:treeId", treeController.getTreeData);

module.exports = router;
