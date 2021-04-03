import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send('Berg 2021');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('server running on port 4000 ');
});
