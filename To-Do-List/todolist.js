const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray)

document.querySelector('#task').addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItem() {
    let items = ""
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
        <div class="input-con d-flex justify-content-center">
            <textarea class="text-center form-control m-1" disabled>${itemsArray[i]}</textarea>
            <div class="edit-con">
            <i class="fa fa-pencil-square-o edittask"></i>
            <i class="fa fa-trash deletetask"></i>
            </div>
        </div>
        <div class="update-con align-content-center justify-content-center">
            <button class="save btn btn-success">Save</button>
            <button class="cancel btn btn-primary">Cancel</button>
        </div>
        <div id="sErr" class = " d-flex justify-content-center m-1"></div>
    </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items

    deletetask()
    edittask()
    savebtn()
    cancelbtn()
    strike()
}

function createItem(item) {

    let result = item.value.trim()
    let min = result.length
    // alert(min)

    if (result === "") {
        document.getElementById("fErr").innerHTML = "Please Enter Task!!!"
        item.value = ""
    } else if (min < 5 || min > 20) {
        document.getElementById("fErr").innerHTML = "Please Enter Task Above 4 characters and below 21 characters!!!"
        item.value = ""
    } else {
        itemsArray.push(item.value.trim())
        localStorage.setItem("items", JSON.stringify(itemsArray))
        location.reload()
    }
}

function displaydate() {
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}

function edittask() {
    const edittas = document.querySelectorAll(".edittask")
    const update = document.querySelectorAll(".update-con")
    const input = document.querySelectorAll(".input-con textarea")

    edittas.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            update[i].style.display = "flex"
            input[i].disabled = false
        })
    })
}

function savebtn() {
    const save = document.querySelectorAll(".save")
    const input = document.querySelectorAll(".input-con textarea")

    save.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            let result = input[i].value.trim()
            let min = result.length
            // alert(min)
            if (result === "") {
                document.getElementById("sErr").innerHTML = "Please Enter Task!!!"
            } else if (min < 5 || min > 20) {
                document.getElementById("sErr").innerHTML = "Please Enter Task Above 4 characters and below 21 characters!!!"
            } else {
                updateItem(result, i)
            }
        })

    })
}

function updateItem(text, i) {
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function cancelbtn() {
    const cancel = document.querySelectorAll(".cancel")
    const update = document.querySelectorAll(".update-con")
    const input = document.querySelectorAll(".input-con textarea")

    cancel.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            update[i].style.display = "none"
            input[i].disabled = true
            location.reload()
        })
    })
}



function deletetask() {
    let deletetask = document.querySelectorAll(".deletetask")
    deletetask.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

window.onload = function () {
    displaydate()
    displayItem()
}