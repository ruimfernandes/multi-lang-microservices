import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

const PORT = 8082;
const app = new Koa();
const router = new Router();

const DESCRIPTION = {
  description:
    "This is a Node.js service that makes additions. As payload receives data like the body below.",
  body: {
    value1: 6,
    value2: 2
  }
};

router.get("/", (ctx, next) => {
  ctx.body = "Addition (Node.js) service home page endpoint hit";
});
router.get("/addition", (ctx, next) => {
  ctx.body = DESCRIPTION;
});
router.post("/addition", (ctx, next) => {
  const { value1, value2 } = ctx.request.body;
  ctx.body = value1 + value2;
});

app.use(logger());
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());

app.listen(PORT);
