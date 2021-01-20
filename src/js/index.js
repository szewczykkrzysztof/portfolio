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

     
    }
  })
  .catch(console.error("Błąd w pobieraniu danych z API Github"));
