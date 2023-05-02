// Сложность 1
// 1. Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, 4, 5].
let arrayOne = [1, 2, 3, 4, 5];
arrayOne.splice(2, 0, "a", "b", "c");
console.log(arrayOne);

// 2. Дан объект {js:&#39;test&#39;, jq: &#39;hello&#39;, css: &#39;world&#39;}. Получите массив его ключей.

let object = {
    "js": "test",
    "jq": "hello",
    "css": "world"
}

for (key in object) { console.log(key) }

// 3. Проверьте, что строка начинается на http://.

let string = "http://"
let stringTwo = "h123"

console.log(`${string} - ${string.includes("http://")} | ${stringTwo} - ${stringTwo.includes("http://")}`)

// 4. Проверьте, что строка заканчивается на .html.

let stringThree = "index.html"
let stringFour = "index.css"

console.log(`${stringThree} - ${stringThree.endsWith(".html")} | ${stringFour} - ${stringFour.endsWith(".html")}`)

// 5. Дана строка, например, &#39;123456&#39;. Переверните эту строку (сделайте из нее &#39;654321&#39;) не
// используя цикл.

let stringFive = "123456";

console.log(stringFive.split("").reverse().join(""))

// 6. Преобразуйте строку &#39;var_test_text&#39; в &#39;varTestText&#39;. Скрипт, конечно же, должен работать
// с любыми аналогичными строками.

let stringSix = "____var_test_text";
let stringSeven = [];

for (let index = 0; index < stringSix.split("_").length; index++) {
    while (stringSix[0] == "_") {
        stringSix = stringSix.slice(1) 
    }

    if (index == 0) {
        stringSeven.push(stringSix.split("_")[0])
    } else {
        stringSeven.push(`${stringSix.split("_")[index].slice(0, 1).toUpperCase()}${stringSix.split("_")[index].slice(1)}`);
    }
}

console.log(stringSeven.join(""));

// 7. Дан массив [&#39;я&#39;, &#39;учу&#39;, &#39;javascript&#39;, &#39;!&#39;]. Преобразуйте массив в строку &#39;Я УЧУ
// JAVASCRIPT!&#39;.

let arrayTwo = ["я", "учу", "javascript"];

console.log(arrayTwo.join(" ").toUpperCase())

// Сложность 2
// 8. В переменной date лежит дата в формате &#39;2025-12-31&#39;. Преобразуйте эту дату в формат
// &#39;31/12/2025&#39;.

let date = new Date("2025-12-31");

let dateTwo = `${date.getUTCDate()}/${date.getMonth()}/${date.getFullYear()}`

console.log(dateTwo)

// 9. Если фамилия находится в конце, то переместить его в начало
// const fullName = &#39;Иван Иванович Иванов&#39;;
// const surname = &#39;Иванов&#39;

const fullName = "Иван Иванович Иванов";
const surname = "Иванов";

fullName.split(" ")[2] == surname ? console.log(`${fullName.split(" ")[2]} ${fullName.split(" ")[0]} ${fullName.split(" ")[1]}`) : console.log(fullName);

// 10. Напишите функцию, которая сравнивает два массива и возвращает true, если они
// идентичны.

function checkArraysToEqual(array, array_) {
    let result;
    let flagResults = [];


    for (let index = 0; index < array.length; index++) {
        array[index] == array_[index] ? flagResults.push(1) : null
    }

    flagResults.length == array.length ? result = true : result = false;

    return result
}

console.log(checkArraysToEqual([1, 2, 3], [1, 2, 4]));
console.log(checkArraysToEqual([1, 2, 3], [1, 2, 3]));

// Сложность 3
// 11. Реализуйте автодополнение.
// Суть: дан, к примеру, массив стран. Дан input. Когда вы вводите первые буквы страны под
// input появляется выпадающий список, в котором расположены страны, которые начинаются на
// те буквы, которые вы ввели. Чем больше букв вы вводите - тем меньше стран в списке. Страну
// можно выбрать, кликнув по ней мышкой - в этом случае ее название появится в инпуте.

let coutries = ['Россия', "Ро123", "Америка", "Италия"];

function readCountries(array) {
    let table = document.querySelector(".countries");

    array.forEach(country => {
        let item = document.createElement("div");
        item.innerHTML = country;
        item.classList.add("country");
        table.append(item)
    })

    document.querySelectorAll(".country").forEach(item => item.addEventListener("click", () => {
        document.querySelector(".input").value = item.innerHTML;
    }))
}

function clearTable() {
    document.querySelectorAll(".country").forEach(item => item.remove())
}

document.addEventListener("DOMContentLoaded", () => {
    readCountries(coutries);
})

document.querySelector(".input").addEventListener("input", () => {
    let newArray = [];

    coutries.forEach(item => {
        item.includes(document.querySelector(".input").value) ? newArray.push(item) : null
    })

    clearTable();
    readCountries(newArray);
})

// Список стран храните в массиве.
// 12. Дана таблица. В верхнем ряду th. Сделайте так, чтобы по нажатию на определенный th
// ряды таблицы сортировались по значениям этого столбца.

const buttons = document.querySelectorAll("th")

let objects = [{
    "fcs": 2,
    "faculty": 1,
    "dob": 1,
    "yos": 1,
}, {
    "fcs": 1,
    "faculty": 2,
    "dob": 2,
    "yos": 2,
},
]

document.addEventListener("DOMContentLoaded", () => {
    readingitems(objects)
})

function readingitems(array) {

    let test = document.querySelector("tbody")

    array.forEach(key => {
        let string = document.createElement("tr");
        
        string.classList.add("myitems");

        let item = document.createElement("td");
        item.innerHTML = key.fcs;
        item.classList.add("fcs");
        string.append(item);

        item = document.createElement("td");
        item.innerHTML = key.faculty;
        item.classList.add("faculty");
        string.append(item);

        item = document.createElement("td");
        item.innerHTML = key.dob;
        item.classList.add("dob");
        string.append(item);

        item = document.createElement("td");
        item.innerHTML = key.yos;
        item.classList.add("yos");
        string.append(item);

        test.append(string);
    })
}

function sortStudent(sortEl) {
    let newArray = [];

    newArray = objects.sort((a, b) => (a[sortEl] > b[sortEl] ? 1 : -1));

    clearTrs();
    readingitems(newArray)
}


function clearTrs() {
    document.querySelectorAll(".myitems").forEach(item => {
        item.remove()
    })
}

buttons.forEach(element => element.addEventListener("click", () => {

    if (element.innerHTML == "FCs" || element.innerHTML == "FCs 🠗" || element.innerHTML == "FCs 🠕") {
        sortStudent("fcs");
        return
        }
    if (element.innerHTML == "Faculty" || element.innerHTML == "Faculty 🠗" || element.innerHTML == "Faculty 🠕") {
        sortStudent("faculty");
        return
        }
    if (element.innerHTML == "Date Of Birthday" || element.innerHTML == "Date Of Birthday 🠗" || element.innerHTML == "Date Of Birthday 🠕") {
        sortStudent("dob");
        return
        }
    if (element.innerHTML == "Years Of Study" || element.innerHTML == "Years Of Study 🠗" || element.innerHTML == "Years Of Study 🠕") {
        sortStudent("yos");
        return
    }
}))
