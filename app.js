const express = require('express')
const app = express();
const http = require('http').Server(app);

//포트설정
let PORT = process.env.PORT;
if(!PORT){PORT=3000;};

//기타모듈
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));

///////////// front routing

app.get('/',(req, res)=>{
    res.render('index.ejs');
});

app.get('/work/1',(req, res)=>{
    res.render('work1.ejs');
});

///////////// server routing

///////////////////
http.listen(PORT,()=>{
    console.log(PORT+'번 포트에서 Connected!');
});