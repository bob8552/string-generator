var expirationDate = new Date();
expirationDate.setFullYear(expirationDate.getFullYear() + 1);

//Money Functions

function moneyAdd() {

    document.cookie = `money=${parseInt(accessCookie("money"), 10) + 1}; path=/; expires=${expirationDate.toUTCString()}`;
    document.getElementById(moneyElement).innerHTML = parseInt(accessCookie("money"), 10);

}


/*
function inventory(itemName, itemPrice) {

    if (!itemPrice) itemPrice = 'No price specified';
    if (!itemName) itemName = 'No name specified';
    document.getElementById(inventoryElement).innerHTML = document.getElementById(inventoryElement).innerHTML + ` Object: ${itemName} Its price: ${itemPrice},`;

}
*/

function checkMoney(cost, itemName) {


    const toCheck = parseInt(moneyCookie, 10)
    if (isNaN(cost)) return;
    if (toCheck < cost) return window.alert('You don\'t have enough money!');
    if (!itemName) itemName = 'No name specified';
    window.alert('You have bought this item !');
    document.cookie = `money=${parseInt(accessCookie("money"), 10) - cost}; path=/; expires=${expirationDate.toUTCString()}`;
    document.getElementById(moneyElement).innerHTML = parseInt(accessCookie("money"), 10);
    document.getElementById(inventoryElement).innerHTML = document.getElementById(inventoryElement).innerHTML + `[Name: ${itemName} Price: ${cost}] `;

}

function removeAll() {

    document.cookie = `money=${0}; path=/; expires=${expirationDate.toUTCString()}`;
    document.getElementById(moneyElement).innerHTML = parseInt(accessCookie("money"), 10);

}

//Cookie functions

function createCookie(cookieName, cookieValue) {

    //document.cookie = cookieName + "=" + cookieValue + "; expires=" + '2022-05-28T15:42:44.000Z';
    var expirationDate = new Date();
    var cookie_string = '';
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    cookie_string = cookieName + "=" + cookieValue + "; path=/; expires=" + expirationDate.toUTCString();
    document.cookie = cookie_string;

}

function accessCookie(cookieName) {

    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');

    for (var i = 0; i < allCookieArray.length; i++) {

        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0) return temp.substring(name.length, temp.length);

    }

    return "";

}

function checkCookie() {
    var user = accessCookie("testCookie");
    if (user != "") {
        window.alert(`Your name is ${user}.`);
    } else {
        user = window.prompt("Please enter your username.");
        if (user != "" && user != null) {
            createCookie("testCookie", user);
        }
    }
}

//Money Cookie 

var moneyCookie = accessCookie('money')

if (moneyCookie != "") {
    window.alert(`Welcome back ${accessCookie('testCookie').toString() || 'Guest'}, You have ${moneyCookie || 0} coins.`);
} else {
    createCookie("money", 0);
}