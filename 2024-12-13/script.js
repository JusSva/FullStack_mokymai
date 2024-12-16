if (localStorage.getItem("data")){
    let data = JSON.parse(localStorage.getItem("data"))

    create_tasks(data)
}



function create_tasks(array) {
    document.querySelector('.list-group').innerHTML = array.map(value => `
        <li class="list-group-item d-flex">
            <span onclick="cross_out(event)">${value}</span>
            <div class="edit"></div>
            <div class="d-flex buttons">
                <button class="btn btn-info" onclick="edit(event)">Edit</button>
                <button class="btn btn-danger" onclick="remove(event)">Remove</button>
            </div>
        </li>
    `).join('');
}

function handleForm(e) {
    e.preventDefault();

    const value = e.target.querySelector('input').value;

    if (value === "" || value === " "){
        document.querySelector(".highlight").style.boxShadow = "0 0 15px 0px red"
        document.querySelector(".error").innerHTML = "If you want to add a task, please give it a name"
        return
    }

    e.target.querySelector('input').value = "";

    // if data is not empty we take the data inside
    if (localStorage.getItem("data")) {

        // Iššifruojame JSON duomenis
        let data = JSON.parse(localStorage.getItem("data"))
       
        // Į gautą masyvą patalpiname naujus duomenis
        data.push(value);
        
        // Viską sukonvertavę į JSON'ą išsaugome localStorage
        localStorage.setItem("data", JSON.stringify(data))

    // if data is empty we put data in it
    } else {
        localStorage.setItem("data", JSON.stringify([value]))
    }
    let data = JSON.parse(localStorage.getItem("data"))
    
    create_tasks(data)
}

dashed = false 
function cross_out(e) {
    if (!dashed){
        e.target.style.textDecoration= "line-through"
        e.target.style.color= "grey"
        dashed = true
    }
    else if (dashed) {
        e.target.style.textDecoration= "none"
        e.target.style.color= "black"
        dashed = false
    }
}

function remove(e) {
    let name = e.target.parentElement.parentElement.children[0].textContent
    data = JSON.parse(localStorage.getItem("data"))

    // Dont give the next line a name, cause it stops working
    data.splice(data.indexOf(String(name)), 1)
    localStorage.setItem("data", JSON.stringify(data))

    create_tasks(data)
}

function edit(e){
    let edit = e.target.parentElement.parentElement.children[1];
    
    edit.innerHTML = `
    <form onsubmit="change_name(event)">
        <div class="input-group group">
            <input 
                type="text" 
                class="form-control new_name" 
                placeholder="Įveskite užduotį"
            >
        </div>
    </form>
    `
}

function change_name(e) {
    e.preventDefault()
    let name = e.target.parentElement.parentElement.children[0].textContent
    let new_name = document.querySelector(".new_name").value
    data = JSON.parse(localStorage.getItem("data"))
    let index = data.indexOf(name)
    data[index] = new_name
    localStorage.setItem("data", JSON.stringify(data))

    create_tasks(data)
}

function remove_shadow (e) {
    document.querySelector(".highlight").style.boxShadow = "none"
    document.querySelector(".error").innerHTML = ""
}