// Functions for getting random stuff

function getRandomString(length) {

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_)(*&^%$#@!-=;/,.';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;

}

function getRandomNumber(length) {

    var randomChars = '1234567890';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;

}

function getRandomSymbols(length) {

    var randomChars = '!@#$%^&*(){}|:"<>?,./~`[]';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;

}

function getRandomLetters(length) {

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;

}

//Actually using the functions above

function genString() {

    var propmt1 = window.prompt('Please enter your length of your string.')
    var propmt = parseInt(propmt1, 10)
    if (isNaN(propmt)) return window.alert('That is not a number.')
    if (propmt < 5) return window.alert('That is too small. Please input a number between 5 and 100.')
    if (propmt > 100) return window.alert('That is too big. Please input a number between 5 and 100.')
    const Numeral = getRandomString(propmt);
    window.alert(`Your string is: ${Numeral}`)

}

function genNumber() {

    var propmt1 = window.prompt('Please enter your length of your number.')
    var propmt = parseInt(propmt1, 10)
    if (isNaN(propmt)) return window.alert('That is not a number.')
    if (propmt < 5) return window.alert('That is too small. Please input a number between 5 and 100.')
    if (propmt > 100) return window.alert('That is too big. Please input a number between 5 and 100.')
    const Numeral = getRandomNumber(propmt);
    window.alert(`Your number is: ${Numeral}`)

}

function genSymbols() {

    var propmt1 = window.prompt('Please enter your length of your symbols.')
    var propmt = parseInt(propmt1, 10)
    if (isNaN(propmt)) return window.alert('That is not a number.')
    if (propmt < 5) return window.alert('That is too small. Please input a number between 5 and 100.')
    if (propmt > 100) return window.alert('That is too big. Please input a number between 5 and 100.')
    const Numeral = getRandomSymbols(propmt);
    window.alert(`Your string with symbols is: ${Numeral}`)

}

function genLetters() {

    var propmt1 = window.prompt('Please enter your length of your letter string.')
    var propmt = parseInt(propmt1, 10)
    if (isNaN(propmt)) return window.alert('That is not a number.')
    if (propmt < 5) return window.alert('That is too small. Please input a number between 5 and 100.')
    if (propmt > 100) return window.alert('That is too big. Please input a number between 5 and 100.')
    const Numeral = getRandomLetters(propmt);
    window.alert(`Your string with letters is: ${Numeral}`)

}