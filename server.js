require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const { connectToDB } = require("./config/db");

connectToDB();

app.use(express.json({ extended: false }));
app.use(cors("*"));
app.use("/api/v1", routes);

app.use((error, _req, res, _next) => {
    console.log(error.stack);
    return res.status(500).send(error);
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is runnning at port ${PORT}`);
});
