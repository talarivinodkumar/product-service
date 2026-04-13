const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Product Service v2 🚀');
});

app.listen(3002, '0.0.0.0', () => {
  console.log('Running on 3002');
});