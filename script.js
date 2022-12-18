document.querySelector("#searchButton").addEventListener("click", getPokemon);

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonImage").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${data.name}</h3>
        <p>ID: ${data.id}</p>
        <p>HP Base Stat: ${data.stats[0].base_stat}</p>
        <p>Attack Base Stat: ${data.stats[1].base_stat}</p>
        <p>Defense Base Stat: ${data.stats[2].base_stat}</p>
        <p>Special Attack Base Stat: ${data.stats[3].base_stat}</p>
        <p>Special Defense Base Stat: ${data.stats[4].base_stat}</p>
        <p>Speed Base Stat: ${data.stats[5].base_stat}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonImage").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}