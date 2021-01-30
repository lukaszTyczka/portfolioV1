import '../scss/main.scss';

var projectsList = document.querySelector('.projects__list--js');
console.log(projectsList);
fetch('https://api.github.com/users/lukaszTyczka/repos')
    .then((resp) => {
        return resp.json();
    })
    .then((resp) => {
        resp.forEach((project) => {
            projectsList.innerHTML += `<li>
                <a href=${project.html_url}>${project.name}</a>
            </li>`;
        });
    })
    .catch((e) => {
        console.log(e);
    });
