const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    title: 'title',
    description: 'description',
  };

  res.send(photo);
});

app.listen(port, () => {
  console.log('App started on ' + port);
});
