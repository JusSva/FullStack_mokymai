function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Checks the frequency of an item in an array
const frequency = (arr, item) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
    return count;
};

let items = ["One", "Two", "Three", "Four", "Five"]

// Generates the item cards
for (i of items) {
    let card = `
    <div class="card"> 
        <h4><strong>Item ${i}</strong></h4> 
        <p class="text">Lorem ipsum igitur something</p> 
        <h3><strong>${random(10, 50)}.${random(10, 99)}$</strong></h3> 
        <button class="btn add_cart" onclick="to_cart(event)">Add to Cart</button> 
    </div>`
    document.querySelector(".items").innerHTML += card
}

let added_items = [];
function add_to_cart(e) {

    let text = document.querySelector(".search").value.trim()

    if (frequency(added_items, text) > 0){
        document.querySelector(`.${text}`).value++
    }

    if (text !== "" && items.includes(text) && frequency(added_items, text) === 0){
        let preke = 
        `<div class="container preke">
            <div class="item">Item ${text}</div> 
            <div class="right"> 
                <div class="count"> 
                    <h5>Count:</h5>
                    <input type="text" class="amount ${text}"></input>
                </div> 
                <button class="remove" onclick="remove(event)">Remove</div>
            </div>
        </div>`
        document.querySelector(".basket").innerHTML += preke
        document.querySelector(".search").value = " "
        added_items.push(text)
        // document.querySelector(".amount").value = added_items.length
        document.querySelector(`.${text}`).value = 1
    }    
}

function to_cart(e) {
    let parent = e.target.parentElement;
    let name = parent.querySelector("h4").textContent;
    name = name.slice(5, name.length);
    document.querySelector(".search").value = name;
    add_to_cart(e)
    document.querySelector(".search").value = ""
}

function remove(e) {
    let row = e.target.parentElement.parentElement
    let row_class = row.getAttribute("class").slice(10, row.getAttribute("class").length)
    let item_object = document.querySelector(`.${row_class} .item`).textContent
    let item_name = item_object.slice(4, item_object.length)

    console.log("before: ", added_items);
    

    for (i of added_items){
        console.log(i);
        if (i === item_name)
            delete added_items[added_items.indexOf(i)]
    }
    
    console.log("after: ", added_items);
    row.remove();
}