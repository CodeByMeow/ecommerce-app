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

app.get("/api/v1", (_req, res) => {
    res.json({
        msg: "Server is running",
    });
});

app.use((error, _req, res, _next) => {
    console.log(error.stack);
    if (
        error instanceof SyntaxError &&
        error.status === 400 &&
        "body" in error
    ) {
        return res.status(400).send({ status: 400, msg: error.message });
    }

    return res.status(500).send(error.body);
});

const PORT = process.env.SERVER_PORT || 8888;
app.listen(PORT, () => {
    console.log(`server is runnning at port ${PORT}`);
});
