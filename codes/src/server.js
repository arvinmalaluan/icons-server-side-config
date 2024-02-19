const app = require("./../app");
const port = process.env.PORT || 3000;
require("dotenv").config();

app.listen(port, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
