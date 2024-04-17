import { appRouter } from './routes.js';

function changeRoute() {
    let route = window.location.pathname;
    let viewContent = appRouter[route] || notFoundPage;
    viewContent();
}

window.onload = function () {
    changeRoute();
};

document.querySelectorAll('nav a').forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        let route = this.getAttribute('href');
        history.pushState(null, null, route);
        changeRoute();
    });
});
