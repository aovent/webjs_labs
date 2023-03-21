// 1. Вывести кнопку с текстом &quot;Привет&quot;, при нажатии на неё выводим alert c
// текстом &quot;Привет Мир!&quot;
document.querySelector(".btn").addEventListener("click", () => {
  alert("Привет");
});

// 2. Выводим кнопку с текстом &quot;Заполнить&quot; и незаполненный инпут, при клике
// на кнопку, заполняем инпут текстом &quot;test@email.ru&quot;
let inputS = document.getElementById("input");
document.querySelector(".inpbtn").addEventListener("click", () => {
  inputS.value = "test@email.com";
});

// 3. Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при
// нажатии на кнопку, выводится алерт с текстом &quot;Вы ввели &#39;текст инпута&#39;&quot;
// или &quot;Вы ничего не ввели в поле&quot;.
let test = document.getElementById("input2");
document.querySelector(".inpbtn2").addEventListener("click", () => {
  alert(test.value);
});

// 4. Выводим кнопку с текстом &quot;Поменять&quot; и два инпута, при клике на кнопку
// инпуты меняются своим введеным текстом
document.getElementById("button").addEventListener("click", () => {
    let one = document.getElementById("t4one");
    let two = document.getElementById("t4two");
    let clear = one.value;

    one.value = two.value;
    two.value = clear;
});

// 5. Выводим две кнопки &quot;заблокировать&quot; и &quot;разблокировать&quot; и инпут. Одна из
// них блокирует инпут с помощью атрибута disabled, а другая разблокирует
array = ["blockbtn", "unblockbtn"]
let block = document.getElementById("disable");
array.forEach((element) =>
  document.getElementById(element).addEventListener("click", () => {
    element === array[0] ?  block.disabled = true : block.removeAttribute("disabled")
  })
); 

// 6. Вывести любой квадрат и кнопку &quot;скрыть квадрат&quot;. Когда мы нажимаем
// на скрыть, квадрат исчезает и текст кнопки меняется на &quot;показать
// квадрат&quot; и так можно кликать сколько угодно раз.
let square = document.querySelector(".square");
let squarebutton = document.getElementById("squarebutton");
document.getElementById("squarebutton").addEventListener("click", () => {
  if (squarebutton.innerHTML == "Скрыть квадрат") {
    square.style.cssText = "display: none;";
    squarebutton.innerHTML = "Показать квадрат";
  } else {
    square.style.cssText = "display: block;";
    squarebutton.innerHTML = "Скрыть квадрат";
  }
});

// 7. Выводим красный квадрат, при наведении на него он становиться
// зеленым, а когда уводим курсор от него, обратно красным.
eventarray = ["mouseover", "mouseleave"]
let color = document.querySelector(".squarecolor");
eventarray.forEach(element => color.addEventListener(element, () => {
    element == eventarray[0]
      ? (color.style.cssText = "background: red;")
      : (color.style.cssText = "background: green;");
}));

// 8. Вывести 4 красных квадрата, при клике на любой, он становиться
// зеленым, при этом если есть уже зеленый квадрат, то он становиться
// обратно красным и так можно кликать на любой квадрат, он становиться
// зеленым, а старый зеленый квадрат обратно крассным и тд. (Сделать
// задачу так, чтобы можно было добавить ещё хоть 100 квадратов при этом
// скрипт не надо менять).
let eight = document.querySelectorAll(".squareID");
eight.forEach(element => element.addEventListener("click", () => {
    eight.forEach(element => {
        element.style.cssText = "background: red;"
    })
    element.style.cssText = "background: green;"
}));

// let eight = document.getElementById("fourSquares");
// let selectedSquare;
// eight.addEventListener("click", function(elem) {
//     let square = elem.target;

//     while (square != this) {
//         if (square.tagName == 'TD') {
//           highlight(target);
//           return;
//         }
//         square = square.parentNode;
//     }
//     // console.log(elem)
//     // console.log(elem.classList.add("test"))
//     // elem.style.cssText = "background: green;"
// })
// function highlight(node) {
//   if (selectedTd) {
//     selectedTd.classList.remove("highlight");
//   }
//   selectedTd = node;
//   selectedTd.classList.add("highlight");
// }

/* <script>
    let table = document.getElementById('bagua-table');

    let selectedTd;

    table.onclick = function(event) {
      let target = event.target;

      while (target != this) {
        if (target.tagName == 'TD') {
          highlight(target);
          return;
        }
        target = target.parentNode;
      }
    }

    function highlight(node) {
      if (selectedTd) {
        selectedTd.classList.remove('highlight');
      }
      selectedTd = node;
      selectedTd.classList.add('highlight');
    }
</script> */

// 9. Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. Кнопки:
// умножить, поделить, сложить, вычесть, вычислить. При нажатии на
// кнопки в любом порядке выводиться в отдельном блоке строка (5-
// 4+3*2...) и при нажатии на кнопку посчитать, заменяем в блоке данную
// строку на результат её вычисления, при этом можно потом дальше
// вычислять с уже этим вычислением.
calc__numbers = document.querySelectorAll(".calc__number");
calc__buttons = document.querySelectorAll(".calc__button");
input = document.getElementById("calc_input")

calc__numbers.forEach(element => element.addEventListener("click", () => {
    input.value += element.innerHTML

    return input.value
}));

calc__buttons.forEach((element) => element.addEventListener("click",() => {
    input.value += element.innerHTML

    return input.value
}));

document.querySelector(".calc__button__res").addEventListener("click", () => {
    let result = eval(input.value);
    input.value = result;
});
