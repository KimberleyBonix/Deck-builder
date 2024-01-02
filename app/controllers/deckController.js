const dataMapper = require('../dataMapper.js');

const deckController = {

    // Deck Page
    // We want to fetch everycard that match the ID in the session.deck
    deckPage: async(req, res) => {
        try {
            // 1. Create a variable where to store the deck cards
            const deck = [];
            
            // 2.1 Is there card is the deck?
            if (req.session.deck.length !== 0){
                // 2.2 For each session.deck id, we get the matching card 
                for(const id of req.session.deck) {
                const addCard = await dataMapper.getCard(id);
                // 2.3 Add the card to the deck
                deck.push(addCard);
                }
            }

            // 3. Render the card list that contain the deck
            res.render('index', {
                cards: deck,
                title: 'Your deck'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    }, 

    // Add a card to the deck
    // We want to select a card from the list and add it to the deck and store them in session
    addCardToDeck: async(req, res) => {
        try {
            // 1.1 Get the card ID to add from the param
            const addId = Number(req.params.id);
            // 1.2 Check if the card exists
            await dataMapper.getCard(addId);

            // 2.1 Is the card already in the deck?
            const deckStatut = req.session.deck.find((card) => (card === addId));

            // 2.2 If not, add it
            if(!deckStatut){
                req.session.deck.push(addId);
                console.log(`The card #${addId} was added to your deck`)
            }

            console.log('Deck : ' + req.session.deck);
            
            // 3. Deck redirection when added
            res.redirect('/deck')
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    // Remove a card from the deck
    deleteCardOfDeck: async(req, res) => {
        try {
            // 1. Get the card if from param
            const deleteId = Number(req.params.id);

            // 2.1 Check if the id is the session
            const deckStatus = req.session.deck.includes(deleteId);

            // 2.2 If yes, remove it by filtering
            if(deckStatus) {
                req.session.deck = req.session.deck.filter((card) => card !== deleteId);
                console.log(`The card #${deleteId} was remove from your deck`);
            }

            console.log('Deck : ' + req.session.deck);

            // 3. Deck redirection
            res.redirect('/deck')
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
}

module.exports = deckController;