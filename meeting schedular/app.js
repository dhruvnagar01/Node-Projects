const express = require('express');
const path = require('path');
const router = require('./routes/admin');
const bodyparser = require('body-parser');

const sequelize = require('./util/database');
const meet = require('./model/meet');
const slot = require('./model/slot');
slot.belongsTo(meet);
meet.hasMany(slot);                        
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname,"view"));


app.use(router);

sequelize.sync().then(()=>{
    console.log('server port started ');
    app.listen(4000);
}).catch(err=>{console.log(err)});