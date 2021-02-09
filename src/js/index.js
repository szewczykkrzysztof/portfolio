import "../scss/main.scss";

const myProjects = document.querySelector(".myProjects__list--js");

// fetch my github respository list sorted from newest
fetch("https://api.github.com/users/szewczykkrzysztof/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    // for each element (repository) in json array
    for (let repository of resp) {
      // destructuring from object respository and extract properties
      let { name, html_url, homepage, description } = repository;
      //   if homepage doesn't exist link it to github project repository
      if (homepage) {
      } else {
        homepage = html_url;
      }

      // add new container with project description
      myProjects.innerHTML += `<div class="githubProject">
    <img
      src="./circles_top.svg"
      class="githubProject__circles"
    />
    <img src="./Github-Icon.svg" />
    <div class="githubProject__grid">
      <p class="githubProject__label">project:</p>
      <h3 class="githubProject__name">${name}</h3>
      <p class="githubProject__label">description:</p>
      <span>${description}</span>
      <p class="githubProject__label">demo:</p>
      <a href=${homepage}>&#60 see here &#62</see></a>
      <p class="githubProject__label">github:</p>
      <a href=${html_url}>&#60 source code &#62</a>
    </div>
  </div>`;
    }
  })
  .catch(error => console.error("Błąd w pobieraniu danych z API Github"));
