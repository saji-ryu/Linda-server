import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as socketIo from "socket.io";
import { createServer, Server } from "http";

dotenv.load();

import routeIndex from "./routes/index";

const PORT: number = Number(process.env.PORT) || 3000;

const app: express.Express = express();
const server: Server = createServer(app);
const io = socketIo.listen(server);
//console.log(io);

server.listen(PORT, () => {
  console.log("server listeninig at port:" + PORT);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

//catch 404 and forward to error handler
app.use(function(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  err.status = 404;
  next(err);
});

//error handling
app.use(function(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.use("/", routeIndex);

//TODO:anyまずい
let ioSocket: socketIo.Socket;
io.sockets.on("connection", socket => {
  console.log("User connected");
  ioSocket = socket;
});

//app.io = io;
export default app;
export { ioSocket };
