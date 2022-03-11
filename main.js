const container = document.querySelector("#container");
const displayBtn = document.querySelector("#display");
const searchBtn = document.querySelector("#search");

const getCards = (amount) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`

    fetch(url).then((res) => res.json()).then((data) => {
        const fetches = data.results.map((pokemon) =>{
            return fetch(pokemon.url).then((res) => res.json())
        });
        Promise.all(fetches).then((res) => {
            
            for(let i = 0; i < res.length; i++){
                
                let pokeName = res[i].name;
                let img = res[i].sprites.other.dream_world.front_default;
    
                container.insertAdjacentHTML("beforeend", `<div class="card" ><div class="pic"><img src="${img}" alt="#" id="one"></div><div class="description">
                <h3>${pokeName}</h3></div>
                <p>${res[i].types.map((element) => element.types)}</p></div>
                `)  
                console.log(res[i].types[0].type.name)
            }
            
        });
    }).catch(error => console.log("error", error));

}

getCards(amount);

const changeAmount = (e) => {
    e.preventDefault();

    container.innerHTML = ""

    amount = document.querySelector("#amount").value;
    getCards(amount);
    console.log(amount)
}

displayBtn.addEventListener("click", changeAmount);

/**
 *fetch(url).then((response) => response.json())
.then(data => {
    console.log("result from fetch", data.results)
    console.log("length of fetch", data.results.length)
    listOfPokemon = data.results;

    for (let i = 0; i < data.results.length; i++){
        let pokeName = data.results[i].name
        console.log(pokeName)
        container.insertAdjacentHTML("beforeend", `<div class="card" ><div class="pic"><img src="" alt="#" id="one"></div><div class="description">
        <h3>${pokeName}</h3></div></div>`)
    }

});
 */

//const cardsMap = data.map((card))

/*
const cards = data.map(pokeName => {
        return `<div class="card" ><div class="pic"><img src="" alt="#" id="one"></div><div class="description">
                    <h3>${pokeName}</h3></div></div>`
    })



let pokemon = listOfPokemon[j].name;

    finalHtml += `<div class="card" >
    <div class="pic">
        <img src="" alt="#" id="one">
    </div>

    <div class="description">
        <h3>${pokemon}</h3>
    </div>
    </div>
    `
*/















/* 

const img1 = document.querySelector("#one");

const listOfItems = []

const amountOfPokemons = 50;

async function getData(url) {
    const response = await fetch().then((response) => response.json());;
  
    return response.json();
  }

for(let i = 1; i <= amountOfPokemons; i++){

    listOfItems.push( getData(`https://pokeapi.co/api/v2/pokemon/${i}`));

}
  
  console.log({ listOfItems });
*/