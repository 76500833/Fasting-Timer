dayjs.extend(window.dayjs_plugin_duration);
window.onload = function() {
    let containerForTimer = document.body.getElementsByClassName('hero-text')[0]
    let timerOnPage = document.body.getElementsByClassName('timer')[0]
    var time = 0;
    
    function countdown() {
        var timer = setInterval(function() {
            time++ 
            // credit to gihub ai sidebar 
            var duration = dayjs.duration(time, 'seconds');
            var formattedTime = `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;
            
            timerOnPage.textContent = formattedTime;

        }, 1000);
    }
let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    countdown()
})
}
