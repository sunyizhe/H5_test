var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;

var RADIUS = 8;

var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2017,4,18,23,47,52);
var showTime = 0;
window.onload =function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    //设置canvas的宽高
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    showTime= getcurshowTimesecond();
    setInterval(function(){
        render(context);
        update();
    },50)
}


function update(){
    var nextshowTime = getcurshowTimesecond();


    var hours = parseInt(showTime/3600);
    var minutes = parseInt((showTime-hours*3600)/60);
    var second = parseInt(showTime%60);

    var nexthours = parseInt(nextshowTime/3600);
    var nextminutes = parseInt((nextshowTime-nexthours*3600)/60);
    var nextsecond = parseInt(nextshowTime%60);

    if(nextsecond!=second){
        showTime = nextshowTime;
    }
}

function getcurshowTimesecond(){
    var curTime = new Date();
    var ret = endTime.getTime()-curTime.getTime();
    ret = Math.round(ret/1000);
     return ret;
}

function render(cxt){
    cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    var hours = parseInt(showTime/3600);
    var minutes = parseInt((showTime-hours*3600)/60);
    var second = parseInt(showTime%60);

    renderDigit(MARGIN_LEFT ,MARGIN_TOP,parseInt(hours/10) ,cxt);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1) ,MARGIN_TOP ,parseInt(hours%10) ,cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1) ,MARGIN_TOP ,10 ,cxt);

    renderDigit(MARGIN_LEFT+39*(RADIUS+1) ,MARGIN_TOP ,parseInt(minutes/10) ,cxt);
    renderDigit(MARGIN_LEFT+54*(RADIUS+1) ,MARGIN_TOP ,parseInt(minutes%10) ,cxt);
    renderDigit(MARGIN_LEFT+69*(RADIUS+1) ,MARGIN_TOP ,10 ,cxt);

    renderDigit(MARGIN_LEFT+78*(RADIUS+1) ,MARGIN_TOP ,parseInt(second/10) ,cxt);
     renderDigit(MARGIN_LEFT+93*(RADIUS+1) ,MARGIN_TOP ,parseInt(second%10) ,cxt);
}

function renderDigit(x ,y ,num , cxt){
    cxt.fillStyle = "rgb(0 ,102 ,153)";

    for(var i = 0; i < digit[num].length; i++){
        for(var j = 0; j < digit[num][i].length; j++){
            if(digit[num][i][j] == 1){
                    cxt.beginPath();
                    cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
                    cxt.closePath();

                    cxt.fill();
            }
        }
    }

}