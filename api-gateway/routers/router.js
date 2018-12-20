import express from "express";
import additionRouter from "./additionService";
import subtractRouter from "./subtractService";

const router = express.Router();

router.use(additionRouter);
router.use(subtractRouter);

export default router;
