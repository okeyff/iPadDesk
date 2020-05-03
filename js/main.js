let welcomePage = document.querySelector('.welcome-page'),
    contentPage = document.querySelector('.content-page');

document.getElementById('start-btn').onclick = function () {
    welcomePage.style.display = 'none';
    contentPage.style.display = 'block';
}




