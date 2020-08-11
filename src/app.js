const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
// importing routes
const indexRoutes = require('./routes/index');




// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))



// routes
app.use('/', indexRoutes);



// static files
app.use(express.static(path.join(__dirname, 'public')));






app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});