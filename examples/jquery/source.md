```javascript
(function() {
    var $ball = $("#ball"),
            DURATION = 500;

    function dropBall() {
        $ball.animate({top: '400px'}, DURATION, 'linear', restoreBall);
    }

    function restoreBall() {
        $ball.animate({top: '100px'}, DURATION, 'linear', dropBall);
    }

    dropBall();
}());
```