const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },

  resultByElementPage: async(req, res) => {
    try {
      const elementType = req.query.element;

      const cards = await dataMapper.getCardsByParams('element', elementType);

      res.render('cardList', {
        cards,
        title: `Carte d'élément ${elementType}`
      })
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  resultByLevelPage: async(req, res) => {
    try {
      const levelNumber = req.query.level;

      const cards = await dataMapper.getCardsByParams('level', levelNumber);

      res.render('cardList', {
        cards,
        title: `Carte de niveau ${levelNumber}`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  resultByValuePage: async(req, res) => {
    try {
      const direction = req.query.direction;
      console.log(`value_${direction}`);
      const directionValue = Number(req.query.value);
      console.log(`valeur de direction : ${directionValue}` );

      const cards = await dataMapper.getCardsByParams(`value_${direction}`, directionValue);

      res.render('cardList', {
        cards,
        title: `Carte ${direction} de valeur ${directionValue}`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  resultByNamePage: async(req, res) => {
    try {
      const name = req.query.name.toLowerCase();

      cards = await dataMapper.getCardsByName(name);

      res.render('cardList', {
        cards,
        title: `Résultat pour : ${name}`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

};

module.exports = searchController;