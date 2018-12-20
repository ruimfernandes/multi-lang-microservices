import express from "express";
import apiAdapter from "./apiAdapter";

const router = express.Router();
const BASE_URL = "http://localhost:8081";
const api = apiAdapter(BASE_URL);

router.get("/", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/subtract", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post("/subtract", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

export default router;
