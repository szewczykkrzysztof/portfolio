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
      //   if homepage doesn't exist link it to github project
      if (homepage) {
      } else {
        homepage = html_url;
      }

      // add new container with project description
      myProjects.innerHTML += `<div class="githubProject">
    <img
      src="../assets/img/circles_top.svg"
      class="githubProject__circles"
    />
    <img src="../assets/img/Github-Icon.svg" />
    <div class="githubProject__grid">
      <span>project:</span>
      <span class="githubProject__name">${name}</span>
      <span>description:</span>
      <span>${description}</span>
      <span>demo:</span>
      <a href=${homepage}>&#60 see here &#62</see></a>
      <span>github:</span>
      <a href=${html_url}>&#60 source code &#62</a>
    </div>
  </div>`;
    }
  })
  .catch(console.error("Błąd w pobieraniu danych z API Github"));
