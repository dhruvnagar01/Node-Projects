const express = require('express');
const app = express();
const route = require('./routes/route')
const bodyParse = require('body-parser');

app.set('view engine','ejs');
app.set('views', 'views')
app.use(bodyParse.urlencoded({extended: false}));

app.post('/handle-click', (req, res, next) => {
    const data = req.body.user;
    console.log(data);
    res.send('data enterted ');
})



app.use(route);
app.listen(4000);