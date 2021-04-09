import express from 'express';

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send('Berg 2021! update');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`);
});
