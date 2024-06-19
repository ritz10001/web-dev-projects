const express = require("express");
const taskDir = require("./routes/taskRoutes")
const userDir = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/connectDb");
const idValidator = require("./middleware/validIdChecker");
const dotenv = require("dotenv").config();
const app = express();


connectDb();


const port = process.env.SERVER_PORT;

app.use(express.json());
app.use("/api/task", taskDir);
app.use("/api/user", userDir);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})