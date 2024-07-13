var isStop =true;
var har=0;
 var min=0;
 var sec=0;

function start(){
    
    if(isStop== true){
        isStop=false;
        timer();
    }

}
function timer(){
    
    if(isStop==false){
        sec=parseInt(sec);
        min=parseInt(min);
        har=parseInt(har);
        sec++;
        if(sec==60) {
            sec=0;
            min++;

        }
        if(min==60){
            min=0;
            har++;
        }
        if(sec<10){
            sec="0"+ sec;
        }
        if(min<10){
            min="0" +min;
        }
        if(har<10){
            har="0"+ har
        }
        startimes.innerHTML =har + ":" + min + ":" + sec;
        setTimeout("timer()",1000);
    }

}

function stop()
{
    isStop=true;
}
function reset()
{
    isStop=true;
    sec=0;
    min=0;
    har=0;
    startimes.innerHTML = "00 : 00 : 00";
}