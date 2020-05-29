let startbtn2 = document.querySelector('#start2');
let resetbtn2 = document.querySelector('#reset2');
let totalsec=0;

let timerFunction = function () {
    totalsec -= 1;
    let minute = Math.floor(totalsec / 60);
    let second = totalsec % 60;

    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    let timenow = minute + ':' + second;

    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = timenow;
}

var a, b;
startbtn2.onclick = function () {
    if(!totalsec){
        let m = Number(document.querySelector('#m_timer').value);
        let s = Number(document.querySelector('#s_timer').value);
        totalsec = m * 60 + s;
    }
    document.querySelector('#m_timer').value = '';
    document.querySelector('#s_timer').value = '';
    let curState = document.querySelector('#start2').textContent;
    if (curState === 'start' && totalsec !== 0) {
        document.querySelector('#start2').textContent = 'stop';
        a = setInterval(timerFunction, 1000);
        b = setInterval(function () {
            if (totalsec === 0) clearInterval(a);
        }, 1000);
    } else {
        document.querySelector('#start2').textContent = 'start';
        clearInterval(a); clearInterval(b);
    }
}

resetbtn2.onclick = function () {
    totalsec = 0;
    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = '00:00';
} 