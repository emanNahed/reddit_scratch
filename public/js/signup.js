const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const invalids = document.querySelectorAll('.valid');
const constraints = document.querySelectorAll('.constraints');

const signup = (e) => {
    e.preventDefault();
    const reqBody = {
        username: inputs[0].value,
        email: inputs[3].value,
        password: inputs[4].value
    };

    fetchRequest('/register', 'POST', reqBody)
        .then(response => {
            if (response.redirected)
                window.location.href = response.url;
            else return response.json();
        }).then(data => serverMessage.innerText = data.message);
    
};

