const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to Back-End -' +
    ' Routes: /api/users/:Username'
  );
});


routerApi(app);


app.listen(port, () => {
  console.log(`Mi port ${port}`);
});