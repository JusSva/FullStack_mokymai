function search(e) {

    let input = document.querySelector(".search_bar").value.toLowerCase()
    input = input.split(" ")
    
    let breed = "";
    for (word in input)
        breed += `${input[word]}/`

    fetch(`https://dog.ceo/api/breed/${breed}images/random`)
    .then(resp => resp.json())
    .then(resp => {
        document.querySelector(".result").innerHTML = `<img src="${resp.message}" alt="">` + document.querySelector(".result").innerHTML
    })
}

function selection(e) {
    document.querySelector("#dog-select").innerHTML = ``
    let test = fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(resp => resp.json())
    // .then(resp => console.log(resp))
    .then(resp => {
        // let breeds = Object.keys(resp.message).join(', ');
        let breeds = Object(resp.message);
        
        // rusis porusis
        for (const [item1, item2] of Object.entries(breeds)){

            // console.log(item1, item2);
            if (item2.length > 0){
                for (i of item2)
                    document.querySelector("#dog-select").innerHTML += `<option value="${item1} ${i}">${item1} ${i}</option>`
            }
            else {
                document.querySelector("#dog-select").innerHTML += `<option value="${item1}">${item1}</option>`
            }
        }  
    })
}

function move(e) {
    let breed = e.target.value
    document.querySelector(".search_bar").value = breed
    search(e)
}