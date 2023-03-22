// Задание 1
// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0.
// В поле для ввода должно вводиться число с количеством секунд, а кнопка должна
// запускать таймер. При запуске таймера число в div-элементе должно замениться на
// введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор,
// пока не дойдёт до 0. При этом таймер должен корректно работать, если во время его
// работы пользователь запускает его заново.

let zeroDiv = document.querySelector(".f__tZero");
let zeroInput = document.getElementById("f__tINP")
let zeroInterval;
document.getElementById("f__tBTN").addEventListener("click", () => {
    if (zeroDiv.innerHTML > 0 && zeroDiv.innerHTML < zeroInput.value) {return}

    zeroDiv.innerHTML = zeroInput.value;
    let func = () => {
        if (zeroDiv.innerHTML <= 0) { return }
        zeroDiv.innerHTML -= 1;
        setTimeout(() => {func()}, 1000)
    }

    func()
})

// Задание 2
// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом. Введённый в
// поле текст должен отображаться внутри h2-элемента, но с задержкой в 300 мс. При этом
// каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный
// вызов и запускает новый. Таким образом программа должна ожидать завершения ввода
// пользователя и только после этого изменять текст в h2.

const textInput = document.getElementById("s__tINP");
const textH2 = document.querySelector(".s__tH2");
let textTimer;
textInput.addEventListener("input", () => {
    clearTimeout(textTimer);

    textTimer = setTimeout(() => {
        textH2.innerHTML = textInput.value
    }, 300)
})
