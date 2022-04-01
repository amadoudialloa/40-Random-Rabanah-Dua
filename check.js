        const resultDiv = document.querySelector('.result');
        const generateBtn = document.querySelector('#generate');
        const regenerateBtn = document.querySelector('#regenerate');

        const loadRandomDua = (resultDiv) => {
    fetch('http://localhost:3001/random-Dua')
    .then(response => response.json())
    .then(result => {
        resultDiv.innerHTML = `<h3>Arabic Dua: ${result.Dua_Arabic}</h3> <br><br> <h4>Transliteration: ${result.Dua_Translit}</h4> <br><br>  <h5> Definition: ${result.Dua_English}</h5> <br><br> <h6> Recommended Use: ${result.Recommended}</h6>`;
    });
};

generateBtn.addEventListener('click', () => {
    loadRandomDua(resultDiv);
});
regenerateBtn.addEventListener('click', () => {
    resultDiv.innerHTML = " "
});


var cal1 = new Calendar(false, 1, false, true),
cal2 = new Calendar(true, 0, false, true),
cal1Mode = cal1.isHijriMode(),
cal2Mode = cal2.isHijriMode();
document.getElementById('calendar-converter').appendChild(cal1.getElement());
document.getElementById('calendar-converter').appendChild(cal2.getElement());
cal1.setDisplayStyle('inline-block');
cal2.setDisplayStyle('inline-block');
cal2.getElement().style.marginLeft = '20px';
cal1.show();
cal2.show();
cal1.callback = function() {
if (cal1Mode !== cal1.isHijriMode()) {
    cal2.disableCallback(true);
    cal2.changeDateMode();
    cal2.disableCallback(false);
    cal1Mode = cal1.isHijriMode();
    cal2Mode = cal2.isHijriMode();
}
else
    cal2.setTime(cal1.getTime());
};
cal2.callback = function() {
if (cal2Mode !== cal2.isHijriMode()) {
    cal1.disableCallback(true);
    cal1.changeDateMode();
    cal1.disableCallback(false);
    cal1Mode = cal1.isHijriMode();
    cal2Mode = cal2.isHijriMode();
}
else
    cal1.setTime(cal2.getTime());
};
cal1.onHide = function() {
cal1.show();
};
cal2.onHide = function() {
cal2.show();
};
