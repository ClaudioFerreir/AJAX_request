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
      const avatar = json.avatar_url;
      const name = json.name;
      const username = json.login;
      const repositorios = json.public_repos;
      const seguidores = json.followers;
      const seguindo = json.following;
      const link = json.html_url;

      avatarPlace.setAttribute('src', avatar);
      namePlace.textContent = name;
      usernamePlace.textContent = username;
      repositoriosPlace.textContent = repositorios;
      seguidoresPlace.textContent = seguidores;
      seguindoPlace.textContent = seguindo;
      linkPlace.setAttribute('href', link);
    })
    .catch(function(error) {
      alert('Ocorreu um erro na requisição da API');
    })
    

})