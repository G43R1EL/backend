const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log('Server is running on port 3000');
})

app.post('/', (req, res) => {
  const { name, age } = req.body;
  res.send(`Hello ${name} you are ${age} years old`);
})