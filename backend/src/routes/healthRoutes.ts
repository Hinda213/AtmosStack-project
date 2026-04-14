import Express = require("express");

const router = Express.Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok, and I am happy" });
});

export = router;
