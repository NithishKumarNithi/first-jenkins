const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Root route on Kubernetes!');
});

app.get('/about', (req, res) => {
  res.send('About route on Kubernetes!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

