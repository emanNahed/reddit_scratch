const button = document.getElementById('.form-row-submit');
const inputs = document.querySelectorAll('input');
const constraints = document.querySelectorAll('.constraints');

const signup = (e) => {
    e.preventDefault();
    const reqBody = {
        username: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value
    };

    fetchRequest('/register', 'POST', reqBody)
        .then(response => {
            if (response.redirected)
                window.location.href = response.url;
            else return response.json();
        }).then(data => serverMessage.innerText = data.message);
    
};

button.addEventListener('submit', (e) => signup(e));
