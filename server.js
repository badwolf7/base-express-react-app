const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  console.log('api says hello');
  res.json({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));