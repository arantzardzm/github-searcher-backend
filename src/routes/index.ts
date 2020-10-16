import { Router } from 'express';
import { searchController, clearCacheController } from '../controllers';
import { redis_check } from '../redis'
const router = Router();

router.post('/search', redis_check.redisCache, searchController);
router.post('/clear-cache', clearCacheController);

export default router;
