function getPokemonInfo(id) {
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + id,
    method: "GET",
    success: function (response) {
      console.log(response,name);
      $('#randomPoke').append(response.name + '<br/>');

    },
    error: function (err) {
      console.log(err);
    },
  })
}

$("#pokeButton").on('click', function(){
  var randomPokemon = Math.floor(Math.random() * 150);
  getPokemonInfo(randomPokemon);
})
