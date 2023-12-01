window.onload = function() {
    var timeEl = document.createElement('p')
    document.body.appendChild(timeEl)
    var time = 0;
    function countdown() {
        var timer = setInterval(function() {
            time++
            timeEl.textContent = time;

        }, 1000);
    }
    countdown()
}