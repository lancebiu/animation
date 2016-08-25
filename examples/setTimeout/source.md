```javascript
(function(){
    var ball = document.getElementById("ball"),
    originTop = parseFloat(window.getComputedStyle(ball).getPropertyValue("top")),
    targetTop = 300,
    duration = 500,
    refreshPeriod = 17,
    step = (targetTop-originTop) / (duration / refreshPeriod);

    ball.style.top = originTop + "px";
    function dropBall() {
        let val = parseFloat(ball.style.top) + step;
        ball.style.top = val + "px";
        if(val < targetTop) {
            setTimeout(dropBall, refreshPeriod);
        } else {
            setTimeout(restoreBall, refreshPeriod);
        }
    }

    function restoreBall() {
        let val = parseFloat(ball.style.top) - step;
        ball.style.top = val + "px";
        if(val > originTop) {
            setTimeout(restoreBall, refreshPeriod);
        } else {
            setTimeout(dropBall, refreshPeriod);
        }
    }

    dropBall();
}());
```