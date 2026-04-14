import app = require("./app");
import env = require("./config/env");

const { PORT } = env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
