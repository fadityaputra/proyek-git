const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Halo, dunia!");
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
app.get("/about", (req, res) => {
    res.send("Ini halaman About!");
});
