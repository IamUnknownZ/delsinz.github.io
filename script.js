window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3");

// mouse click
    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'popcat1.png';
        audio.play();
    });

// finger click touch screen
    img.addEventListener('touchstart', function(){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('touchmove', function(){
        img.src = 'popcat1.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}
