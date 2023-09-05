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
        deck: req.session.deck,
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
        deck: req.session.deck,
        title: `Carte de niveau ${levelNumber}`
      })
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  resultByValuePage: async(req, res) => {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  resultByNamePage: async(req, res) => {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

};

module.exports = searchController;