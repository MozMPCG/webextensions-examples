(function(){
    var app = {};
    app.random = function(){
        return (Math.floor(Math.random()*10) + 1);        
    }
    app.details = function(){
        app.toGuess = document.querySelector('#guess');
        app.toGuess.innerText = app.random();
        app.score = document.querySelector('#score');
        app.score.innerText = 0;
    }

    app.eventhandlers = function(){
        app.bubblesDiv.addEventListener('click', (e)=>{
            if(e.target.className === 'bubble'){
                if(app.toGuess.innerText === e.target.innerText){
                    app.realscore = Number(app.score.innerText);
                    app.score.innerText = app.realscore+10;
                    app.fill();
                    app.toGuess.innerText = app.random();
                }
                else{
                    app.fill();
                    app.toGuess.innerText = app.random();
                }
            }
        });
    }
    app.fill = function(){
        app.bubblesDiv.innerHTML = '';
        for(var i = 0; i<80; i++){
            app.bubblesDiv.innerHTML += '<div class="bubble">'+app.random()+'</div>'
        }
    }
    app.timer = function(){
        app.flag = 1;
        app.timings = document.getElementById('timer');
        app.timings.innerText = Number(app.timings.innerText);
        setInterval(function(){
            if(app.timings.innerText > 1){
                app.timings.innerText--;
            }else{
                app.bubblesDiv.innerHTML = '';
                app.bubblesDiv.innerHTML = '<h1>You Scored : '+app.score.innerText+'</h1><br>';
                app.bubblesDiv.innerHTML += '<button>Replay :)</button>';
                app.restartBtn = document.querySelector('button');
                app.restartBtn.addEventListener('click', ()=>{
                    app.restart();
                })
            }
        }, 1000);
    };
    app.initialize = function(){
        app.timer();
        app.details();
        app.bubblesDiv = document.querySelector('#bubbles');
        app.eventhandlers();
        app.fill();
    }
    app.restart = function(){
        window.location.reload();
    };
    app.initialize();
})();