const app = require('./app');


app.listen(app.get('PORT'), () => {
    console.log('listen to port');
})