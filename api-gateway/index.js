import express from "express";
import router from "./routers/router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Simple API Gateway");
});
app.use(router);
app.listen(3000);
