const express = require('express');
const app = express();
const port = 3000;

// require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json');

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { list: restaurantList })

});

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id.toString() )
  console.log('restaurant:', restaurant)
  res.render('show', { restaurant: restaurant })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));