const timerOptions = document.querySelector(".timer__controls");
const countDown = document.querySelector('.display__time-left');
const timeToReturn = document.querySelector('.display__end-time');
const timeObj = new Date();

timerOptions.addEventListener('click', startTimer);
let toggle = 0;//instead of the toggle based clearing system, could use clearInterval(timer) after declaring timer as a global var

function startTimer(event){
    toggle++;
    let timerLength = event.target.dataset.time;
    display(timerLength);

    var timer = setInterval( ()=>{
        timerLength--;
        if (timerLength < 0 || toggle ==2){
            clearInterval(timer);
            toggle--;
        }
        else
            display(timerLength);
    },1000);
}


function display(time){
    countDown.innerText = `${pad(Math.floor(time/60))}:${pad(time%60)}`
    
    let min = timeObj.getMinutes() + Math.floor(time/60);
    let hour = timeObj.getHours() + (min >= 60 ? Math.floor(min/60) : 0);
    min = min % 60;    

    timeToReturn.innerText = `Be back at ${pad(hour)}:${pad(min)}`;
}

const pad = (num) => num < 10 ? '0' + num : num;

