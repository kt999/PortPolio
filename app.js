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

app.get('/test',(req,res)=>{
    res.json({
        "dsa":"dsadas",
        "dsadsa":"Dsadsa",
        "totalTicketCount":189,
        "sortBy":"가격",
        "ticketList": [
            {
                "totalPrice":"₩40,000",
                "deTicket":{
                    "flightId":197,
                    "airPlaneCode":"OZ8011",
                    "airLineKr":"아시아나항공",
                    "airLineEn":"ASIANA AIRLINE",
                    "airLineImg":"https://kt999.site/airLineImg/asiana.jpg",
                    "type":"직항",
                    "deTime":"06:55",
                    "arTime":"06:55",
                    "price":"₩40,000",
                    "timeGap":"25분"
                },
                "deTicket":{
                    "flightId":22,
                    "airPlaneCode":"OZ8901",
                    "airLineKr":"아시아나항공",
                    "airLineEn":"ASIANA AIRLINE",
                    "airLineImg":"https://kt999.site/airLineImg/asiana.jpg",
                    "type":"직항",
                    "deTime":"08:00",
                    "arTime":"08:17",
                    "price":"₩20,000",
                    "timeGap":"17분"
                },
            },
            {
                "totalPrice":"₩40,000",
                "deTicket":{
                    "flightId":216,
                    "airPlaneCode":"KE1203",
                    "airLineKr":"대한항공",
                    "airLineEn":"KOREA AIR",
                    "airLineImg":"https://kt999.site/airLineImg/korea.jpg",
                    "type":"직항",
                    "deTime":"08:00",
                    "arTime":"08:17",
                    "price":"₩30,000",
                    "timeGap":"25분"
                },
                "deTicket":{
                    "flightId":22,
                    "airPlaneCode":"OZ8901",
                    "airLineKr":"아시아나항공",
                    "airLineEn":"ASIANA AIRLINE",
                    "airLineImg":"https://kt999.site/airLineImg/asiana.jpg",
                    "type":"직항",
                    "deTime":"08:00",
                    "arTime":"08:17",
                    "price":"₩20,000",
                    "timeGap":"17분"
                },
            },
            {
                "totalPrice":"₩40,000",
                "deTicket":{
                    "flightId":216,
                    "airPlaneCode":"KE1203",
                    "airLineKr":"대한항공",
                    "airLineEn":"KOREA AIR",
                    "airLineImg":"https://kt999.site/airLineImg/korea.jpg",
                    "type":"직항",
                    "deTime":"08:00",
                    "arTime":"08:17",
                    "price":"₩32,000",
                    "timeGap":"15분"
                },
                "deTicket":{
                    "flightId":22,
                    "airPlaneCode":"OZ8901",
                    "airLineKr":"대한항공",
                    "airLineEn":"KOREA AIR",
                    "airLineImg":"https://kt999.site/airLineImg/korea.jpg",
                    "type":"직항",
                    "deTime":"08:40",
                    "arTime":"09:00",
                    "price":"₩21,000",
                    "timeGap":"25분"
                },
            }
        ]
    })
});

///////////// server routing

///////////////////
http.listen(PORT,()=>{
    console.log(PORT+'번 포트에서 Connected!');
});