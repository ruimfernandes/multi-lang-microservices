import express from "express";
import apiAdapter from "./apiAdapter";

const BASE_URL = "http://localhost:8082";
const router = express.Router();
const api = apiAdapter(BASE_URL);

router.get("/", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/addition", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post("/addition", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

export default router;
