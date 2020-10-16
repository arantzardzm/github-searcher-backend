import { Router } from 'express';
import { searchController, clearCacheController } from '../controllers';

const router = Router();

router.post('/search', searchController);
router.post('/clear-cache', clearCacheController);

export default router;
