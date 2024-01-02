const dataMapper = require("../dataMapper");

const searchController = {

  // Search page
  searchPage: (_, res) => {
    res.render('search');
  },

  // Card result by element searched
  resultByElementPage: async(req, res) => {
    try {
      // 1. Get the query from the form
      const elementType = req.query.element;

      // 2. Customize the request with the query
      const cards = await dataMapper.getCardsByParams('element', elementType);

      // 3. Render the results
      res.render('index', {
        cards,
        title: `${elementType} element card`
      })
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // Card result by level searched
  resultByLevelPage: async(req, res) => {
    try {
      const levelNumber = req.query.level;

      const cards = await dataMapper.getCardsByParams('level', levelNumber);

      res.render('index', {
        cards,
        title: `Level ${levelNumber} card`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // Card result by value
  resultByValuePage: async(req, res) => {
    try {
      const direction = req.query.direction;
      // Parsing the direction, the value must be a number
      const directionValue = Number(req.query.value);

      const cards = await dataMapper.getCardsByParams(`value_${direction}`, directionValue);

      res.render('index', {
        cards,
        title: `${direction} ${directionValue} card`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // Card result by name
  resultByNamePage: async(req, res) => {
    try {
      const name = req.query.name.toLowerCase();

      cards = await dataMapper.getCardsByName(name);

      res.render('index', {
        cards,
        title: `Result(s) for : ${name}`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

};

module.exports = searchController;