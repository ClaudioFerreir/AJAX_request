//JS

document.addEventListener('DOMContentLoaded', function() {
  const avatarPlace = document.getElementById('avatar');
  const namePlace = document.getElementById('name');
  const usernamePlace = document.getElementById('username');
  const repositoriosPlace = document.getElementById('repositories');
  const seguidoresPlace = document.getElementById('followers');
  const seguindoPlace = document.getElementById('following');
  const linkPlace = document.getElementById('link');
  const endpoint = 'https://api.github.com/users/claudioferreir'

  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function (json) {
      avatarPlace.setAttribute('src', json.avatar_url);
      namePlace.textContent = json.name;
      usernamePlace.textContent = json.login;
      repositoriosPlace.textContent = json.public_repos;
      seguidoresPlace.textContent = json.followers;
      seguindoPlace.textContent = json.following;
      linkPlace.setAttribute('href', json.html_url);
    })
    .catch(function(error) {
      alert('Ocorreu um erro na requisição da API');
    })
    

})