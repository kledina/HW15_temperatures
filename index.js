const cities = ['Москва', 'Париж', 'Берлин', 'Лондон', 'Мадрид', 'Афины', 'Амстердам'];
let temps = [];

let minTemp = 300;
let maxTemp = -273;

for (let i = 0; i < cities.length; i++) {
    let temp = +prompt("Введите температуру для города " + cities[i]);
    temps.push(Number(temp));
    
    if (temp < minTemp) {
        minTemp = temp;
    }
    
    if (temp > maxTemp) {
        maxTemp = temp;
    }
}
console.log(temps);

const tempsList = document.createElement('ul');

for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `Температура в городе ${cities[i]}: ${temps[i]}°C`;
    tempsList.appendChild(listItem);
}

let minData = document.createElement('p');
minData.textContent = `Минимальная температура: ${minTemp}°C`;

let maxData = document.createElement('p');
maxData.textContent = `Максимальная температура: ${maxTemp}°C`;

document.body.appendChild(tempsList);
document.body.appendChild(minData);
document.body.appendChild(maxData);