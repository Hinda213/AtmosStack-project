import Express = require("express");
import cors = require("cors");
import healthRouter = require("./routes/healthRoutes");
import weatherRouter = require("./routes/weatherRoutes");

const app = Express();

app.use(cors());
app.use(Express.json());

app.use(healthRouter);
app.use(weatherRouter);

export = app;
