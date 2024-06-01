function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = `Количество дней: ${daysCount}`;
    if (isNaN(inputDate)) {
        resultDiv.textContent = `Некорректная дата`;
    }
}
function clearFields() {
    let inputDate = document.querySelector('input[type="date"]');
    let resultDiv = document.getElementById('result');
    inputDate.value = '';
    resultDiv.textContent = '';
}