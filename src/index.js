const app = require('./app');
const cron = require("node-cron");

cron.schedule('* * * * *', () => {
  console.log('Chamando a cron!');
});

app.listen(3003, () => {
    console.log("Server is running!");
})

module.exports = app;