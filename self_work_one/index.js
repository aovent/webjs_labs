// Задание 1

let users = [
    {
        name: "Максим",
        login: "lipatovmaxim",
        password: "password"
    },
    {
        name: "Роман",
        login: "roman",
        password: "password1"
    }
]

function login() {
    let data = prompt("Введите логин.")
    let flag = false
    users.forEach(element => {
        if (element.login == data) {
            flag = true
            password(element)
            return
        } 
    })
    function password(element) {
        let password = prompt("Введите пароль.");
        console.log(element.password, password)
        element.password == password ? alert(`Hello ${element.name}!`) : alert("Вы ввели неправильный пароль.");
    }
    flag == false ? alert("Такого пользователя не существует.") : null
}

// Задание 2

document.getElementById("play").addEventListener("click", () => {
    const botNumber = 7;
    function trying() {
        let userselect = prompt("Введите свой вариант числа.")
        if (userselect == null) {
            return
        }
        if (typeof parseInt(userselect) != typeof NaN) {
            alert("Вы ввели не число.")
            trying()
        } 

        if (userselect > botNumber) {
            alert("Меньше!")
            trying()
        } 
        if (userselect < botNumber) {
            alert("Больше!")
            trying()
        }
        if (userselect == botNumber) {
            alert("Правильно!")
        } 
    }  
    trying()
})
