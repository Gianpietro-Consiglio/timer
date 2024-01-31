const btn1 = document.getElementById('btn1')
btn1.addEventListener('click',start)

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',Stop)

const btn3 = document.getElementById('btn3')
btn3.addEventListener('click',restart)

const seconds_html = document.getElementById('seconds')
const minutes_html = document.getElementById('minutes')
const hours_html = document.getElementById('hours')
let timer;
let seconds = 0
let minutes = 0
let hours = 0

function start(){
    document.getElementById('container').style.backgroundColor = 'blue'
    timer = setInterval(function (){
            
        if (seconds === 59 && minutes === 59){
            seconds = 0
            minutes = 0
            hours++
            seconds_html.innerText = zeroNumber(seconds)
            minutes_html.innerText = `${zeroNumber(minutes)}:`
            hours_html.innerText = `${zeroNumber(hours)}:`
        }


        else if (seconds === 59){
            seconds = 0
            seconds_html.innerText = zeroNumber(seconds)
            minutes++
            minutes_html.innerText = `${zeroNumber(minutes)}:`
            
        }
        seconds++
        seconds_html.innerText = zeroNumber(seconds)
    }, 1000)
}



function zeroNumber(num){
    return num >= 10 ? num : `0${num}`
}

function Stop(){
    document.getElementById('container').style.backgroundColor = 'red'
    clearInterval(timer)
}

function restart(){
    document.getElementById('container').style.backgroundColor = 'aliceblue'
    seconds = 0
    minutes = 0
    hours = 0
    seconds_html.innerText = zeroNumber(seconds)
    minutes_html.innerText = `${zeroNumber(minutes)}:`
    hours_html.innerText = `${zeroNumber(hours)}:`
}