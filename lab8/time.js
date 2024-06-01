function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    document.querySelector('.seconds').innerHTML = currentTime;

    time = document.getElementById('second-arrow')
    time.style.transform = `rotate(${new Date().getSeconds() * 6}deg) translate(0, 0px)`;
}
setInterval(showTime, 1000);