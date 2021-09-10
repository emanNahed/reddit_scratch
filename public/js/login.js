const button = document.getElementById('login-button');
const inputs = document.querySelectorAll('input');
const constraints = document.querySelectorAll('.constraints');

const signin = (e) => {
    e.preventDefault();
    const reqBody = {
        email: inputs[0].value,
        password: inputs[1].value
    };

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    fetch('/login', {method: 'POST', headers: header, body: JSON.stringify(reqBody)})
        .then(response => {
            if (response.redirected)
                window.location.href = response.url;
            else return response.json();
        }).then(data => console.log(data));
    
};

button.addEventListener('click', (e) => signin(e));
