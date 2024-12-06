for (const produktas of items){
    let rating ='';
    let count = 0;
    for (i=0; i<Math.round(produktas.rating); i++){
        rating+= `<i class="bi bi-star-fill"></i>`
        count++;
    }

    if (produktas.rating.toFixed(1)+ 0.2 >= Math.floor(produktas.rating)+0.3 || produktas.rating.toFixed(1)-0.2 <= Math.ceil(produktas.rating)-0.3 && count < 5){
        rating+= `<i class="bi bi-star-half"></i>`
        count++;
    }

    for (let i =0; i<5-count; i++){
        rating+= `<i class="bi bi-star"></i>`
        count++;
    }

    let kaina;
    if (produktas.discountPercentage > 0){
        discounted_kaina = `<span class="real_price">$${(produktas.price * ((100- produktas.discountPercentage)/100)).toFixed(2)}</span>`;
        kaina = `<span class="OG_price">$${produktas.price}</span>`;
    }
    else {
        discounted_kaina = ``;
        kaina = `<span class="real_price" style="color: black;">$${produktas.price}</span>`;
    }
    
    document.querySelector('.container.for_sale').innerHTML +=
    `
    <hr></hr>
    <div class="d-flex flex-row align-items-center" data-category="${produktas.category}">
        <div class= img>
            <div class="nuolaida"> - ${Math.ceil(produktas.discountPercentage)}%</div>
            <img src="${produktas.thumbnail}"></img>
        </div>
        <div class="text">
            <a href="">${produktas.title}</a>
            <h5>${rating}</h5>
            <p>${produktas.description}</p>
        </div>
        <div class="purchase">
            <div class="price">    
                <p class="discount">${discounted_kaina}</p>
                <p class="pirmine kaina">${kaina}</p>
            </div>
            <button class="btn button" onclick="add_to_cart(event)">Add to Cart</button>
        </div>
    </div>
    `;
}

let shopping_cart = [];

function add_to_cart(e) {
    e.preventDefault();
    let parent = e.target.parentElement.parentElement;   
     
    let price = parent.children[2].children[0].children[0].children[0].textContent;  
    let name = parent.children[1].children[0].textContent;
    let picture = parent.children[0].children[1].getAttribute("src");
    let category = parent.dataset.category;
    let amount;

    if (shopping_cart.filter(title => title.name === name).length > 0) {
        for (const produktas of shopping_cart){
            if(produktas.name === name){
                produktas.qty++;
                let inputField = document.querySelector(`input[data-value='${produktas.name}']`);
                inputField.value = produktas.qty;
                inputField.dataset.value = produktas.qty;
            }
        }
    }
    else {
        shopping_cart.push({name, qty:1})
        amount = 1;
        
        let row = `
            <div class="row d-flex">
                <div class="img">
                    <img class="basket_picture" src="${picture}" alt=""></img>
                </div>
                <div class="item_name">
                    <h4>${category}</h4>
                    <h4>${name}</h4>
                </div>
                <div class="count">
                    <input class="amount" type="number" data-value="${name}" value="1" onchange="update(event)">
                </div>
                <div class="cost">${price}</div> 
                <button class="remove" onclick="remove(event)">X</button>
            </div>
            `;
        document.querySelector(".left").innerHTML = row + document.querySelector(".left").innerHTML;
    }
    
    document.querySelector(".cart").style.display= "flex";
    
    total_price = 0;
    document.querySelectorAll('.amount').forEach(el => {
        let row_element = el.parentElement.parentElement;
        let number_of_items = el.value;
        let single_cost = parseFloat(row_element.children[3].textContent.slice(1));
        let cost = single_cost * number_of_items;
        total_price += cost;
    });
    document.querySelector(".total_price").innerHTML = `$${total_price.toFixed(2)}`;
}

function update(event) {
    total_price = 0;
    document.querySelectorAll('.amount').forEach(el => {
        let row_element = el.parentElement.parentElement;
        let number_of_items = el.value;
        let single_cost = parseFloat(row_element.children[3].textContent.slice(1));
        let cost = single_cost * number_of_items;
        total_price += cost;
    });
    document.querySelector(".total_price").innerHTML = `$${total_price.toFixed(2)}`;
}

function back(e) {
    // document.querySelector(".cart").style.display= "none"
    // document.querySelector(".for_sale").style.display= "flex"
}