import { Router } from "express";
import { searchController, clearCacheController } from "../controllers";
import { redisSearch } from "../redis";

const router = Router();

router.post("/search", redisSearch, searchController);
router.post("/clear-cache", clearCacheController);

export default router;
