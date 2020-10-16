import { Request, Response } from 'express';
import { redisClearCache } from '../../redis';

export default async function clearCacheController(
  req: Request,
  res: Response,
) {
  try {
    redisClearCache();
    return res.send({ status: 200, message: 'Success' });
  } catch (err) {
    return res.send({ status: 500, message: 'Error fetching response' });
  }
}
