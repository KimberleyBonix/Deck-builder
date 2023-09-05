const deckSession = (req, res, next) => {
    if (!req.session.deck){
        req.session.deck = [];
        console.log('Initialisation du deck' + req.session.deck);
    }
    next();
}

module.exports = deckSession;