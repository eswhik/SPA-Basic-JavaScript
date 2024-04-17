function homePage() {
    document.getElementById('app').innerHTML = `
        <h1 class="center-pwa">Welcome to the home page</h1>
        <p class="center-pwa">This is the main page of our website.</p>
    `;
    document.title = 'Home';
}

function posts() {
    document.getElementById('app').innerHTML = `
        <h1 class="center-pwa">List of publications</h1>
        <div class="container">
            <div class="card"><img src="https://picsum.photos/300/250"></div>
            <div class="card"><img src="https://picsum.photos/300/250"></div>
            <div class="card"><img src="https://picsum.photos/300/250"></div>
            <div class="card"><img src="https://picsum.photos/300/250"></div>
            <div class="card"><img src="https://picsum.photos/300/250"></div>
        </div>
    `;
    document.title = 'List of Publications';
}

function aboutUs() {
    document.getElementById('app').innerHTML = `
        <h1 class="center-pwa">About us</h1>
        <p class="center-pwa">We are a company dedicated to...</p>
    `;
    document.title = 'About Us';
}

function contact() {
    document.getElementById('app').innerHTML = `
        <h1 class="center-pwa">Contact information</h1>
        <p class="center-pwa">You can contact us at...</p>
    `;
    document.title = 'Contact Us';
}
export { homePage, posts, aboutUs, contact };