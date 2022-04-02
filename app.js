const express = require('express');
const path = require('path');
const data = require('./Array to string (5).json');
const cors = require('cors');





/*const moment = require('moment-hijri');

moment().format('iYYY/iM/iD');

console.log(moment);
*/

const app = express();


app.use(cors({
    origin: "*",
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.set('views', path.join(__dirname, 'docs'));
app.set('view engine', 'html');
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);




app.use('/random-Dua', (req, res) => {
    const {Dua_Arabic, Dua_Translit, Dua_English, Recommended} = data[Math.round(Math.random() * data.length)];
    return res.json({Dua_Arabic, Dua_Translit, Dua_English, Recommended});
});

app.use('/', (req, res) => {
    return res.render('index');
});

app.listen(9090, () => console.log('App'));
 