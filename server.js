const express = require('express');
const knex = require('./db/knex');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const methodOverride = require('method-override');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname+"/public"));

const auth = require('./routes/auth');
const player = require('./routes/player');

app.use('/auth', auth);
app.use('/player', player);

app.get('/', (req, res)=>{
  knex('videos')
  .then(function(videos){
    res.render('index', {videos})
  })
});



app.listen(PORT, () => {
  console.log(`All systems are operational captain! Sensors scanning on ${PORT}`);
});


module.exports = app;
