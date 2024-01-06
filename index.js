// let url = "https://pokeapi.co/api/v2/pokemon/1"
let wrapper = document.querySelector(".main__wrapper")
function printcard(data) {
  
  console.log(data)
  wrapper.innerHTML += `
      <div class="card">
        <div class="card__img"><img src="${data.sprites.front_default}" alt=""></div>
        <div class="card__data">
          <h2>${data.name}</h2>
          <span class="card__data__number">${data.id}</span>
          <div>
            <span>${data.weight}</span>
            <span class="card__ability">${data.abilities[1].ability.name}</span>
          </div>
        </div>
      </div>`
  // if (data.abilities[1].ability.name == "chlorophyll") {
  //   console.log("chlorophyll")
  // } if (data.abilities[1].ability.name == "solar-power") {
  //   console.log("solar-power")
  // }if (data.abilities[1].ability.name == "rain-dish") {
  //   console.log("rain-dish")
  // }if (data.abilities[1].ability.name == "run-away") {
  //   document.querySelector(".card__ability").classList.add('nueva_clase');
  //   console.log("run-away")
  // } else {
  // }
}

function getpokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data)=> {printcard(data)})
} 

function printpokemon(number) { 
  for (let i = 1; i <= number; i++){
    getpokemon(i)
  }
}
printpokemon(150)