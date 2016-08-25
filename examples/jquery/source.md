```javascript
(function() {
    var $ball = $("#ball"),
            originTop = window.getComputedStyle(ball).getPropertyValue("top"),
            targetTop =  '400px',
            DURATION = 500;

    function dropBall() {
        $ball.animate({top: targetTop}, DURATION, 'linear', restoreBall);
    }

    function restoreBall() {
        $ball.animate({top: originTop}, DURATION, 'linear', dropBall);
    }

    dropBall();
}());
```