const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },

  resultByElementPage: async(req, res) => {
    try {
      const element = req.query.element;

      const cards = await dataMapper.getCardsByElement(element);

      res.render('cardList', {
        cards,
        title: `Carte d'élément ${element}`
      })
    } catch (error) {
      
    }
    
  }

};

module.exports = searchController;