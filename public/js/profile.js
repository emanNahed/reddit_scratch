
const profile = () => {

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    fetch('/profile', {method: 'GET', headers: header })
        .then(response => {
            if (response.redirected)
                window.location.href = response.url;
            else return response.json();
        });
    
};

profile();