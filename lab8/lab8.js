function showDate() {
    let out1 = document.querySelector('.date1');
    let out2 = document.querySelector('.date2');
    let out3 = document.querySelector('.date3');
    let out4 = document.querySelector('.date4');
    let out5 = document.querySelector('.date5');
    let out6 = document.querySelector('.date6');
    let year = document.querySelector('.year');
    let month = document.querySelector('.month');
    let date = document.querySelector('.date');
    let week = document.querySelector('.week');
    let today = new Date();
    out1.innerHTML = 'Дата и время для русской локали: <br>' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для индийской локали: <br>' + today.toLocaleString('gu-IN');
    out3.innerHTML = 'Дата и время для бразильской локали: <br>' + today.toLocaleString('pt-BR');
    out4.innerHTML = 'Дата и время для турецкой локали: <br>' + today.toLocaleString('tr-TR');
    out5.innerHTML = 'Дата и время для корейской локали: <br>' + today.toLocaleString('ko-KR');
    out6.innerHTML = 'Дата и время для армянской локали: <br>' + today.toLocaleString('hy-AM');
    year.innerHTML = 'Текущий год: ' + today.getFullYear();
    nowMonth = today.getMonth();
    const MonthD = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
    month.innerHTML = 'Текущий месяц: ' + MonthD[nowMonth];
    let nowDate = today.getDate();
    date.innerHTML ='Текущая дата: ' +  nowDate;
    nowWeek = today.getDay();
    const WeekD = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    week.innerHTML = 'День недели: ' + WeekD[nowWeek];
}
function WeekFun() {
    const day = document.querySelector('.d').value;
    const month = document.querySelector('.m').value;
    const year = document.querySelector('.y').value;
    if (!day || !month || !year) {
        document.querySelector('.out').innerText = "Введите все значения";
        return; 
    }
    if (isNaN(year) || year < 1 || year > 2024) {
        document.querySelector('.out').innerText = "Год указан некорректно";
        return;
    }
    if (isNaN(month) || month < 1 || month > 12) {
        document.querySelector('.out').innerText = "Месяц указан некорректно";
        return;
    }
    if (isNaN(day) || day < 1 || day > 31) {
        document.querySelector('.out').innerText = "День указан некорректно";
        return;
    }
    const date = new Date(year, month - 1, day);
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    document.querySelector('.out').innerText = `День недели ${dayOfWeek}`;
}
