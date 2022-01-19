const app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.info(`Express listening port ${port}`);
});
