require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public/dist')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});