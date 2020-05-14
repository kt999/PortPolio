const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');

//https redirection
app.use((req,res,next)=>{
	if(!req.secure){
		res.redirect("https://"+"kt999.site"+req.url);
	}
	else{
		next();
	}
});


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

// app.get('/work/1',(req, res)=>{
//     res.render('work1.ejs');
// });

///////////// server routing

///////////////////
try {
  const option = {
    ca: fs.readFileSync('/etc/letsencrypt/live/kt999.site/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/kt999.site/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/kt999.site/cert.pem'), 'utf8').toString(),
  };

  https.createServer(option, app).listen(PORT, () => {
    console.log("success!!");
  });
} catch (error) {
  console.error('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
  console.warn(error);
}
