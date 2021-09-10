const button = document.getElementById('form-row-submit');
const inputs = document.querySelectorAll('input');
const constraints = document.querySelectorAll('.constraints');
const body = document.querySelector('body');
console.log(button);
const signup = (e) => {
    e.preventDefault();
    const reqBody = {
        username: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value
    };

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    fetch('/register', {method: 'POST', headers: header, body: JSON.stringify(reqBody)})
        .then(response => {
            if (response.redirected)
                window.location.href = response.url;
            else return response.json();
        }).then(data => body.innerText = data.message);
    
};

button.addEventListener('click', (e) => signup(e));
