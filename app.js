const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to world!");   
})

app.listen(PORT, () => console.log("The server is listening on port " + PORT));

