window.onload = () => {
    //numplus
    sample;

    //title animation
    $("#main_text").fadeToggle(2000);

    //nav animation
    $("#nav_text_1").fadeToggle(1500);
    $("#nav_text_2").fadeToggle(2500);
    $("#nav_text_3").fadeToggle(3500);
};

const skillIcon = (index) => {
    const contentBox = document.getElementById('skill_content_client');

    if(index == 0){
        contentBox.innerHTML = `
                        <div>
                            <div>- 시멘틱 태그를 활용하여 좀 더 직관적으로 코드를 작성.</div>
                            <div>- 검색엔진최적화(SEO)를 고려한 코드작성.</div>
                            <div>- 반응형 레이아웃을 고려한 코드작성.</div>
                        </div>
            `;
    }
    else if(index == 1){
        contentBox.innerHTML = `
                        <div>
                            <div>- Grid, Flex를 이용하여 구조적인 레이아웃 구성.</div>
                            <div>- 미디어쿼리를 이용하여 필수적으로 반응형 웹을 구현.</div>
                            <div>- HTML태그들의 단계적인 구성을 고려하여 구조적이고 효율적인 코드작성.</div>
                        </div>
            `;
    }
    else if(index == 2){
        contentBox.innerHTML = `
                        <div>
                            <div>- ES6 문법 숙지.</div>
                            <div>- 이벤트 핸들링을 통하여 역동적인 페이지를 구현.</div>
                            <div>- Ajax를 활용하여 외부 API서버와 통신하고 데이터를 클라이언트에 제공.</div>
                            <div>- JQuery, D3 library등 외부자바스크립트 모듈을 import하여 상황에 맞게 사용.</div>
                            <div>- 쿠키를 활용하여 JWT방식으로 로그인 로직을 구현.</div>
                        </div>
            `;
    }
    else if(index == 3){
        contentBox.innerHTML = `
                        <div>
                            <div>- Life cycle, Component, Props구조를 이해하고 이를 활용한 코드작성.</div>
                            <div>- React-Hooks를 이용하여 Class형 컴포넌트에서 함수형 컴포넌트로 변환.</div>
                            <div>- Redux를 이용하여 state를 global하게 이용하고 관리함.</div>
                            <div>- Redux-Saga를 이용하여 Action을 비동기처리 함.</div>
                            <div>- Next.js를 이용하여 기존 CSR의 문제점을 SSR로 해결함.</div>
                        </div>
            `;
    }
};

const skillIconServer = (index) => {
    const contentBox = document.getElementById('skill_content_server');
    if(index == 0){
        contentBox.innerHTML = `
                        <div>
                            <div>- 기본적인 php문법 숙지.</div>
                            <div>- MVC패턴을 적용하여 API서버를 구성.</div>
                            <div>- PDO를 이용하여 mysql 데이터베이스를 제어하고 활용함.</div>
                            <div>- php-curl을 이용하여 외부 API서버에서 데이터를 가져와서 활용함.</div>
                        </div>
            `;
    }
    else if(index == 1){
        contentBox.innerHTML = `
                        <div>
                            <div>- Express 모듈, ES6문법을 적용하여 서버를 구성.</div>
                            <div>- 라우팅, Restful API개념을 통하여 직관적으로 서버에서 데이터를 제공.</div>
                            <div>- MVC패턴, 기능들의 모듈화를 통하여 유지보수에 최적화된 코드로 구성.</div>
                            <div>- 클라이언트측에서 활용하기 쉽게 JSON형태의 데이터를 구성하여 제공.</div>
                            <div>- JWT를 이용하여 로그인 서비스 구축 경험.</div>
                            <div>- socket.io를 활용하여 클라이언트간의 실시간통신 서버 구축 경험.</div>
                            <div>- https를 적용하여 기존 http의 보안상 취약점을 극복.</div>
                            <div>- .env파일을 이용하여 비밀키 관리.</div>
                            <div>- pm2를 이용하여 배포 경험.</div>
                        </div>
            `;
    }
    else if(index == 2){
        contentBox.innerHTML = `
                        <div>
                            <div>- 기본적인 mysql문법을 숙지하고, CRUD기능 구현.</div>
                            <div>- 관계형 데이터베이스의 특성을 이용하여 데이터베이스를 설계함.</div>
                            <div>- PK, JOIN, GROUP BY등의 개념을 활용하여 데이터를 조합하여 제공함.</div>
                        </div>
            `;
    }
};

//nav
function getOffsetTop(el) { var top = 0; if (el.offsetParent) { do { top += el.offsetTop; } while (el = el.offsetParent); return [top]; } }

const navLink = (index) => {

    let location_1 = getOffsetTop(document.getElementsByClassName('temp_section')[0]);
    let location_2 = getOffsetTop(document.getElementsByClassName('temp_section')[1]);
    let location_3 = getOffsetTop(document.getElementById('section_4'));

    if(index == 0){
        $('#root').animate({scrollTop : location_1-30}, 500);
    }
    else if(index == 1){
        $('#root').animate({scrollTop : location_2-30}, 1000);
    }
    else if(index == 2){
        $('#root').animate({scrollTop : location_3}, 1500);
    }

    else if(index == 3){
        $('#root').animate({scrollTop : 0}, 1500);
    }
};



// number ++
const count_1 =2;
const count_2 =1;
const count_3 =1;

let count_sub_1 = 0;
let count_sub_2 = 0;
let count_sub_3 = 0;


const numPlus = () => {

    const count_area_1 = document.getElementsByClassName('content_count')[0];
    const count_area_2 = document.getElementsByClassName('content_count')[1];
    const count_area_3 = document.getElementsByClassName('content_count')[2];

    if(count_sub_1 <= count_1){
        count_area_1.innerHTML = count_sub_1;
        count_sub_1++;
    }
    if(count_sub_2 <= count_2){
        count_area_2.innerHTML = count_sub_2;
        count_sub_2++;
    }
    if(count_sub_3 <= count_3){
        count_area_3.innerHTML = count_sub_3;
        count_sub_3++;
    }
};

const sample = setInterval(numPlus,500);


const preparing = () => {
    alert("준비중 입니다.");
};

