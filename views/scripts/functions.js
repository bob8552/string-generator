function moneyAdd() {

    money = money + 1;
    document.getElementById(moneyElement).innerHTML = "Current amount of money: " + money;

}

/*
function inventory(itemName, itemPrice) {

    if (!itemPrice) itemPrice = 'No price specified';
    if (!itemName) itemName = 'No name specified';
    document.getElementById(inventoryElement).innerHTML = document.getElementById(inventoryElement).innerHTML + ` Object: ${itemName} Its price: ${itemPrice},`;

}
*/

function upgradedMoneyAdd() {


    if (money < 100) return window.alert('You dont have enough money to use this dispenser (100+ coins)')
    money = money + 10;
    document.getElementById(moneyElement).innerHTML = "Current amount of money: " + money;

}

function checkMoney(cost, itemName) {

    if (isNaN(cost)) return;
    if (money < cost) return window.alert('You don\'t have enough money!');
    if (!itemName) itemName = 'No name specified';
    window.alert('You have bought this item !');
    money = money - cost;
    document.getElementById(moneyElement).innerHTML = "Current amount of money: " + money;
    document.getElementById(inventoryElement).innerHTML = document.getElementById(inventoryElement).innerHTML + `[Name: ${itemName} Price: ${cost}] `;

}

function removeAll() {

    money = 0;
    document.getElementById(moneyElement).innerHTML = "You have no money.";

}

class Test {

    constructor(Test){
        this.name = Test
    }

}