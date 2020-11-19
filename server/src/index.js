import express from "express"
import renderer from './utils/renderer'

const app = express();

app.use(express.static('public'))

app.get("*", (req, res, next) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log("server started");
});
