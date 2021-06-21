const express = require("express");
const app = express();
const port = 3000;

app.get("/posts", (req, res) => {
  const post = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  };

  res.send(post);
});

app.listen(port);
