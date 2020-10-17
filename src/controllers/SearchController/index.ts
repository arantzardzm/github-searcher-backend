import { Request, Response } from "express";
import axios from "axios";
import { checkAlphaRegex, checkAlphaNumRegex } from "../utils/validator";
import { redisSet } from "../../redis";

export default async function searchController(req: Request, res: Response) {
  try {
    const { selectInput, searchInput } = req.body;
    if (!checkAlphaRegex(selectInput) || !checkAlphaNumRegex(searchInput)) {
      return res.send({
        status: 500,
        message: "Invalid data provided",
        data: [],
      });
    }
    const response = await axios.get(
      `https://api.github.com/search/${selectInput}?q=${searchInput}&page=1&per_page=100`
    );
    if (!response || !response.data) {
      return res.send({
        status: 400,
        message: "Error checking response",
        data: [],
      });
    }

    redisSet(searchInput, selectInput, response.data);
    return res.send({ status: 200, message: "Success", data: response.data });
  } catch (err) {
    return res.send({
      status: 500,
      message: "Error fetching response",
      data: [],
    });
  }
}
