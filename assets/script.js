let time = localStorage.getItem("timeFasted") ? parseInt(localStorage.getItem("timeFasted")) : 0;

let timer = $("<p>").attr("id", "timerP");
$("body").append(timer);

setInterval (function(){
    time++;
    let duration = dayjs.duration(time, 'seconds');
    let formattedTime = `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;
    localStorage.setItem("timeFasted", time);
    timer.text(formattedTime);
}, 1000);