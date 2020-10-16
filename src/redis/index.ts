import { Request, Response, NextFunction } from 'express';

const redis = require('redis');

// Configure redis
const redisClient = redis.createClient(6379);

export const redisSearch = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  redisClient.get(
    req.body.searchInput + req.body.selectInput,
    (err: any, data: any) => {
      if (data) {
        res.send({ status: 200, message: 'Success', data: JSON.parse(data) });
      } else {
        next();
      }
    },
  );
};

export const redisSet = (
  searchInput: string,
  selectInput: string,
  searchResult: any,
) => {
  redisClient.setex(
    searchInput + selectInput,
    7200, // 2 hours
    JSON.stringify(searchResult),
  );
};

export const redisClearCache = () => {
  redisClient.flushdb();
};
