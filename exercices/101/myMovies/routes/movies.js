var express = require('express');
var router = express.Router();

const FILMS = [
  {
    id : 1,
    title : "Harry Potter à l'école des sorciers",
    duration : 152,
    budget : 125000000,
    link : "https://www.imdb.com/title/tt0241527/"
  },

  {
    id : 2,
    title: "Harry Potter et la Chambre des secrets",
    duration: 161,
    budget: 100000000,
    link : "https://www.imdb.com/title/tt0295297/"
  },

  {
    id : 3,
    title: "Harry Potter et le Prisonnier d'Azkaban",
    duration: 142,
    budget: 130000000,
    link : "https://www.imdb.com/title/tt0304141/"
  }
]

// Read the pizza identified by an id in the menu
router.get('/:id', (req, res) => {
  console.log(`GET /movies/${req.params.id}`);

  const indexOfFilmFound = FILMS.findIndex((pizza) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(FILMS[indexOfFilmFound]);
});


/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('GET /movies');
  res.json(FILMS);
});

module.exports = router;