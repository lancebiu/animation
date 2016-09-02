```javascript
 (function() {
        window.requestAnimationFrame =
                window.requestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.msRequestAnimationFrame;

        var ball = document.getElementById("ball"),
                originTop = parseFloat(window.getComputedStyle(ball).getPropertyValue("top")),
                targetTop = 300,
                step = 7;

        ball.style.top = originTop + "px";
        function dropBall() {
            var val = parseFloat(ball.style.top) + step;
            ball.style.top = val + "px";
            if (val < targetTop) {
                requestAnimationFrame(dropBall);
            } else {
                requestAnimationFrame(restoreBall);
            }
        }

        function restoreBall() {
            var val = parseFloat(ball.style.top) - step;
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