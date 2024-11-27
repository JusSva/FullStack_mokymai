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
    console.log(produktas.rating.toFixed(1))

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
    <div class="d-flex flex-row align-items-center">
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
            <button class="btn button">Add to Cart</button>
        </div>
    </div>
    `;
}