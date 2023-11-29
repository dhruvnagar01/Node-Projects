const express = require('express');
const app = express();
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine','ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(4000);
// sequelize.sync()
//    .then(() => {
//     app.listen(4000);
//       console.log('Database synchronized');
//    })
//    .catch(err => {
//       console.error('Error synchronizing database:', err);
//    });