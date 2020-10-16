import { Request, Response, NextFunction } from 'express';
const redis = require("redis");

// Configure redis
const redis_client = redis.createClient(6379);


export const redis_check = {
  redisCache: (req: Request, res: Response, next: NextFunction) => {
    redis_client.get(req.body.searchInput + req.body.selectInput, (err: any, data: any) => {
      if (data) {
        res.send(JSON.parse(data));
      } else {
        next();
      }
    });
  }
}

export const redisSet = (searchInput: string, selectInput: string, searchResult: string) => {
  redis_client.setex(searchInput + selectInput, 10000, JSON.stringify(searchResult));
}

export const clearCache = () => {
  redis_client.flushdb();
}
