
timeset=40
var interval = setInterval(() => {
    if(timeset<=0)
    {
        clearInterval(interval);
    }
    else
        timeset--;

}, 1000);
