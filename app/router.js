const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');

// homepage
router.get('/', mainController.homePage);

// card page
router.get('/cards/:id', mainController.cardPage);

// search page
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.resultByElementPage);

// deck page
router.get('/deck', deckController.deckPage );
router.get('/deck/add/:id', deckController.addCardToDeck);
router.get('/deck/delete/:id', deckController.deleteCardOfDeck);





module.exports = router;