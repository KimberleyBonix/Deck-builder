const dataMapper = require('../dataMapper.js');

const mainController = {

  // Homepage data
  homePage: async (_, res) => {
    try {
      // Request all
      const cards = await dataMapper.getAllCards();

      // Build an response object
      res.render('cardList', {
        cards,
        title: 'Cards list'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // Card page data with request parameters
  cardPage: async(req, res) => {
    try {
      // Get the card ID if from the param
      const cardId = req.params.id;
      // Passing the ID to the request
      const card = await dataMapper.getCard(cardId);

      // Render the response
      res.render('cardPage', {card})
      
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }

  },
};

module.exports = mainController;
