// 1
let cost = prompt("Введите стоимость товара:");
let money = prompt("Введите количество денег клиента:");

cost = parseFloat(cost);
money = parseFloat(money);

if (isNaN(cost) || isNaN(money) || cost < 0 || money < 0) {
    alert("Неверный формат ввода.");
} else if (cost === money) {
    alert("Покупка совершена");
} else if (cost > money) {
    let shortage = cost - money;
    alert("Для покупки не хватает " + shortage + " р.");
} else {
    let change = money - cost;
    alert("Покупка совершена. Сдача " + change + " р.");
}

// 2
let number = prompt("Введите число:");
number = parseFloat(number);

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// 3
let result;
let a = prompt('a');
let b = prompt('b');
a + b < 4 ? result = 'Мало' : result = 'Много';
alert(result)

// 4
let login = prompt('Введите логин:');
let message = (login === 'Сотрудник') ? 'Привет' :
              (login === 'Директор') ? 'Здравствуйте' :
              (login === '') ? 'Нет логина' :
              '';

alert(message)

// 5
let login1 = prompt('Введите логин:');
if (login1 === 'Админ') {
    let password = prompt('Введите пароль:');
    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password === null || password === '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login1 === null || login1 === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
