const form = document.querySelector('form');


form.addEventListener('submit', function (e) {

    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }
    e.preventDefault();
    alert(`Signin with successful!!!`);
    form.reset();
    window.location.href = "/index.html";

})