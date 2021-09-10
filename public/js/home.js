const lis= document.querySelectorAll('li');
let logoutLink;

const homePage = () => {

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetch('/', {method: 'GET', headers: header})
    .then(res => {
        const cookie = document.cookie;
        const cookieVals = cookie.split(';')

        let isAuth;
        for(let i = 0; i< cookieVals.length; i++){
            let cookieItem = cookieVals[i].split('=');
            if(cookieItem[0] === 'isAuth' && cookieItem[1] === 'true' ){
                isAuth = true;
                break;
            }
        }
        if(isAuth){
            lis[1].childNodes[0].textContent = 'Profile';
            lis[2].childNodes[0].textContent = 'Logout';
            lis[1].childNodes[0].href= './profile.html';
            lis[2].childNodes[0].href= '#';
            lis[2].childNodes[0].id = 'logout';
        }
    });

    setTimeout(() =>{
        logoutLink = document.getElementById('logout');
    }, 1000);
    
};


const logout = ()=>{
    console.log('hoo');
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetch('/logout', {method: 'POST', header: header})
    .then(res => {
        if(!document.cookie){
            lis[1].childNodes[0].textContent = 'Register';
            lis[2].childNodes[0].textContent = 'Login';
            lis[1].childNodes[0].href= './signup.html';
            lis[2].childNodes[0].href= './login.html';
            lis[2].childNodes[0].id = 'login';
        }
    });
}

homePage();
 
setTimeout(()=>{ if(logoutLink)
    logoutLink.addEventListener('click', (e) => logout());
}, 1000);