```javascript
 (function() {
        window.requestAnimationFrame =
                window.requestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.msRequestAnimationFrame;

        var ball = document.getElementById("ball"),
                originTop = parseFloat(window.getComputedStyle(ball).getPropertyValue("top")),
                targetTop = 400,
                step = 10;

        ball.style.top = originTop + "px";
        function dropBall() {
            let val = parseFloat(ball.style.top) + step;
            ball.style.top = val + "px";
            if (val < targetTop) {
                requestAnimationFrame(dropBall);
            } else {
                requestAnimationFrame(restoreBall);
            }
        }

        function restoreBall() {
            let val = parseFloat(ball.style.top) - step;
            ball.style.top = val + "px";
            if (val > originTop) {
                requestAnimationFrame(restoreBall);
            } else {
                requestAnimationFrame(dropBall);
            }
        }

        dropBall();
    }());
```