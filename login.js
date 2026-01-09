const form = document.querySelector('form');
const username = document.querySelector('#username');

form.addEventListener('submit', function (e) {

    if (!form.checkValidity()){
        form.reportValidity();
        return;
    }
    e.preventDefault();
    alert(`Welcome ${username.value}, successful login!!!`);
    form.reset();
})