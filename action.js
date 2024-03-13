function navigateTo(url) {
    window.location.href = url;
}

alert("This portfolio is still being built, please be patient as content is uploaded and updated :)");

function changeColor(btn) {
    btn.style.backgroundColor = '#363435';
    btn.style.color = '#fdf9f9';
    btn.style.border = '1px solid';
}

function resetColor(btn) {
    btn.style.backgroundColor = '#8be3dd';
    btn.style.color = '#363435';
    btn.style.border = 'none';
}

window.onload = function() {
    var nameElement = document.getElementById('myName');
    nameElement.style.left = '50px';
    animateButtons(); // Call the animateButtons function here
}

function animateButtons() {
    const buttons = document.querySelectorAll('#menu button');
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('show');
        }, index * 200); // Adjust delay between button animations
    });
}

window.onload = function() {
    var nameElement = document.getElementById('myName');
    nameElement.style.left = '50px';
    animateButtons(); // Call the animateButtons function here
    
    var bodyBoxElement = document.getElementById('bodyBox');
    bodyBoxElement.classList.add('slide-and-fade-in');
}

function toggleContactPage() {
        var contactPage = document.getElementById('contactPage');
        if (contactPage.style.display === 'none') {
            contactPage.style.display = 'block';
        } else {
            contactPage.style.display = 'none';
        }
    }
