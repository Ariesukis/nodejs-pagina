const express = require('express');
const app = express();
const path = require('path');

var dir = path.join(__dirname, 'public');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes 
app.use(require('./routes/index'));

//static files
app.use(express.static(dir));

//server port
app.listen(app.get('port'), () => {
    console.log(dir);
    console.log('Servidor en el puerto ', app.get('port'));
});

