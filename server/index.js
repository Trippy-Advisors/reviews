const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const db = require("./db.js");
const compression = require("compression");

app.use("/:id", express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(compression());

app.get("/reviews/hotels/:hotelId", (req, res) => {
  db.getReviewsbyID(req.params.hotelId, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
