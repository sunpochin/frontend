const express = require('express');
const app = express();
const port = 3000;

// require express-handlebars here
const exphbs = require('express-handlebars')
const movieList = require('./movies.json');

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// app.get('/', (req, res) => {
//   res.send('express Hello World!')
// });
app.use(express.static('public'));

app.get('/', (req, res ) => {
  // create a variable to store movieOne
  // past the movie data into 'index' partial template
  res.render('index', { movies: movieList.results })
  // res.render('index')
})


app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  // const movies = movieList.results.filter(movie => {
  //   return movie.title.includes(keyword)
  // })
  const movies = movieList.results.filter(movie => {
    return movie.title.toLowerCase().includes((req.query.keyword).toLowerCase());
  });
  console.log(req.query);
  console.log(movies);
  res.render('index', { movies: movies, haha: keyword })
})

app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(movie => movie.id.toString() === req.params.movie_id.toString() )
  console.log('movie:', movie)
  res.render('show', { movie: movie })
  // const movieOne = {
  //   id: 1,
  //   title: 'Jurassic World: Fallen Kingdom',
  //   description:
  //     'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  //   release_date: '2018-06-06',
  //   image: 'c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg'
  // }
  // res.render('show', { movie: movieOne })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));