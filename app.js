const countdown1 = ()=>{
    const countDate = new Date('June 21, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-1").innerText = textDay;
    document.querySelector(".hour-1").innerText = textHour;
    document.querySelector(".minute-1").innerText = textMinute;
    document.querySelector(".second-1").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-1").remove();
        clearInterval(timer1);
    }
    
}

const countdown2 = ()=>{
    const countDate = new Date('June 27, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-2").innerText = textDay;
    document.querySelector(".hour-2").innerText = textHour;
    document.querySelector(".minute-2").innerText = textMinute;
    document.querySelector(".second-2").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-2").remove();
        clearInterval(timer2);
    }
}

const countdown3 = ()=>{
    const countDate = new Date('August 15, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-3").innerText = textDay;
    document.querySelector(".hour-3").innerText = textHour;
    document.querySelector(".minute-3").innerText = textMinute;
    document.querySelector(".second-3").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-4").remove();
        clearInterval(timer3);
    }
}
const countdown4 = ()=>{
    const countDate = new Date('September 19, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-4").innerText = textDay;
    document.querySelector(".hour-4").innerText = textHour;
    document.querySelector(".minute-4").innerText = textMinute;
    document.querySelector(".second-4").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-4").remove();
        clearInterval(timer4);
    }
}
const countdown5 = ()=>{
    const countDate = new Date('October 10, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-5").innerText = textDay;
    document.querySelector(".hour-5").innerText = textHour;
    document.querySelector(".minute-5").innerText = textMinute;
    document.querySelector(".second-5").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-5").remove();
        clearInterval(timer5);
    }
}
const countdown6 = ()=>{
    const countDate = new Date('October 31, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-6").innerText = textDay;
    document.querySelector(".hour-6").innerText = textHour;
    document.querySelector(".minute-6").innerText = textMinute;
    document.querySelector(".second-6").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-6").remove();
        clearInterval(timer6);
    }
}
const countdown7 = ()=>{
    const countDate = new Date('November 1, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-7").innerText = textDay;
    document.querySelector(".hour-7").innerText = textHour;
    document.querySelector(".minute-7").innerText = textMinute;
    document.querySelector(".second-7").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-7").remove();
        clearInterval(timer7);
    }
}
const countdown8 = ()=>{
    const countDate = new Date('December 8, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-8").innerText = textDay;
    document.querySelector(".hour-8").innerText = textHour;
    document.querySelector(".minute-8").innerText = textMinute;
    document.querySelector(".second-8").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-8").remove();
        clearInterval(timer8);
    }
}

const countdown9 = ()=>{
    const countDate = new Date('July 6, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    document.querySelector(".day-9").innerText = textDay;
    document.querySelector(".hour-9").innerText = textHour;
    document.querySelector(".minute-9").innerText = textMinute;
    document.querySelector(".second-9").innerText = textSecond;
    if(gap <=417){
        document.querySelector(".countdown-9").remove();
        clearInterval(timer1);
    }
}

let timer1 = setInterval(countdown1, 1000);
let timer2 = setInterval(countdown2, 1000);
let timer3 = setInterval(countdown3, 1000);
let timer4 = setInterval(countdown4, 1000);
let timer5 = setInterval(countdown5, 1000);
let timer6 = setInterval(countdown6, 1000);
let timer7 = setInterval(countdown7, 1000);
let timer8 = setInterval(countdown8, 1000);
let timer9 = setInterval(countdown9, 1000);