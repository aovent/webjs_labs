// Задание 1.
// Напишите функцию, создающую выпадающий список на веб-странице (HTML select)
// из массива объектов со значениями. Массив должен содержать объекты со свойствами:
// • value — значение для атрибута value тэга option
// • label — значение для содержимого тэга option (заголовок элемента при
// открытии списка или выбранного значения)

// Вторым аргументом функция должна принимать выбранное значение (value
// выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент
// массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
// Возвращаемое значение — DOM-элемент select.

function mainProgram(array, index = 0) {
    let defaultValue;
    array.forEach(element => {
        element["value"] == index ? defaultValue = index : defaultValue = array[0]["value"];
    });
    (typeof defaultValue == "undefined") ? defaultValue = array[0] : null; 

    let select = document.createElement("select");
    array.forEach(element => {
        let label, value; 

        if (typeof element != "object") {
            label = element; value = element;
        } else { label = element["label"]; value = element["value"]; }

        let option = document.createElement("option");
        select.append(option);
        option.textContent = label;
        option.setAttribute("value", value);
        element == array[0] ? option.setAttribute("value", defaultValue) : null; 
    });

    return select;
}

const array = [
    {
        value: "test1",
        label: "test1_l"
    },
    {
        value: "test2",
        label: "test2_l"
    }];
const arrayTwo = [1, 2, 3, 4, 5];

document.body.append(mainProgram(array, "test1"));

// Задание 2
// Дополнительное задание
// Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания
// выпадающего списка могла обрабатывать не только массив объектов, но и другие
// виды входящих значений, а именно:
// • Массив примитивных значений типа string или number. В таком случае value и
// label будут равны. Например: [1, 2, &#39;три&#39;, &#39;четыре&#39;, ...]
// • Объект с произвольными свойствами и значениями типа string или number. В
// таком случае каждый элемент должен формироваться из ключа (value) и
// значения (label) каждого свойства переданного объекта. Например: {valuel:
// &#39;Значение 1&#39;, value2: &#39;Значение 2&#39;, ...}
