const deckSession = (req, res, next) => {

    // This middleware will be use everytime a page is loaded
    // To prevent multiple creation of the store deck[], we check is there already one
    if (!req.session.deck){
        req.session.deck = [];
        console.log('Initialisation du deck' + req.session.deck);
    }

    res.locals.deck = req.session.deck;
    next();
};

module.exports = deckSession;