let frombutton = document.getElementById('frombtn')
let itemsfield = document.querySelector(".listelem")
let forminput = document.getElementById('frominp')


frombutton.addEventListener("click", (event) => {
    event.preventDefault();
    
    let itemblock = document.createElement("div");
    let pelement = document.createElement("p");

    if (forminput.value.length == 0) {
        alert("Вы ничего не ввели.")
        return
    }

    pelement.innerHTML = forminput.value;
    
    let buttons = document.createElement("div");
    let firstbutton = document.createElement("button");
    let secondbutton = document.createElement("button");
    
    itemsfield.append(itemblock)
    itemblock.append(pelement);
    itemblock.append(buttons);
    buttons.append(firstbutton);
    buttons.append(secondbutton);

    itemblock.classList.add("itemblock");
    pelement.classList.add("item");
    buttons.classList.add("buttons");
    firstbutton.classList.add("delete__item");
    secondbutton.classList.add("ready__item");
    
    
    firstbutton.innerHTML = "Удалить"
    secondbutton.innerHTML = "Готов"    
    
    let blocks = document.querySelectorAll(".itemblock");
    manageBlock(blocks);
})

function manageBlock(array) {
    array.forEach(itemblock => itemblock.addEventListener("click", (event) => {
        if (event.target.classList.value == "delete__item") {
            itemblock.remove()
        } else if (event.target.classList.value == "ready__item") {
            itemblock.style.cssText = "background: #F0E68C;"
        }
    }))
}
