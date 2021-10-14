function game() {
    let randNumber = parseInt(Math.random() * (100 - 1) + 1);
    let attemp = 10;
    trying();

    function trying() {
        let userNumber = prompt("Введите число", "");

        function checkNumber() {
            if (parseFloat(userNumber)) {
                return;
            } else {
                userNumber = prompt("Вы ввели не число, повторите ввод!", "");
                checkNumber();
            }
        }
        checkNumber();
        userNumber = Number(userNumber);
        console.log(attemp)
        if (userNumber > randNumber) {
            alert("Ваше число больше заданного!");
        } else if (userNumber < randNumber) {
            alert("Ваше число меньше заданного!");
        } else {
            alert("Поздравляем, Вы победили!");
            return;
        }
        if (attemp == 1) {
            alert("У Вас кончились поптки. Вы проиграли:(");
            if (confirm("Хотите начать игру заново?")) {
                game();
            }
            else {
                return;
            }
        } 
    alert("У вас осталось " + (--attemp) + " попыток");
    trying();
    }
}
game();