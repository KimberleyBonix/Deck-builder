const dataMapper = require('../dataMapper.js');

const deckController = {
    deckPage: async(req, res) => {
        try {
            // On veut réccupèrer chaque carte qui correspond aux ID dans session.deck
            // 1. On créé une variable où stocker les cartes du deck
            const deck = [];
            
            // 2.1 On regarde s'il y a des cartes dans le deck
            if (req.session.deck.length !== 0){
                // 2.2 Pour chaque id de session.deck, on réccupère la carte correspondant 
                for(const id of req.session.deck) {
                const addCard = await dataMapper.getCard(id);
                // 2.3 on ajoute la carte à notre deck
                deck.push(addCard);
                }
            }

            // 3. Rendy de la liste de carte présent dans notre deck
            res.render('cardList', {
                cards: deck,
                title: 'Votre Deck'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    }, 

    addCardToDeck: async(req, res) => {
        try {
            // 1.1 On réccupère l'id de la carte à ajouter au session.deck
            const addId = Number(req.params.id);
            // 1.2 et on s'assure que l'ID correspond à une carte existante
            await dataMapper.getCard(addId);

            // 2.1 La carte est-elle déjà présente dans le deck ?
            const deckStatut = req.session.deck.find((card) => (card === addId));

            // 2.2 Si non présent (undifined), on l'ajoute
            if(!deckStatut){
                req.session.deck.push(addId);
                console.log(`La carte #${addId} a été ajouté au deck`)
            }

            console.log('Deck : ' + req.session.deck);
            
            // 3. Redirection vers le deck
            res.redirect('/deck')
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    deleteCardOfDeck: async(req, res) => {
        try {
            // 1. On réccupère l'id de la carte à supprimer de session.deck
            const deleteId = Number(req.params.id);

            // 2.1 On regarde si l'id est bien contenu dans session.deck
            const deckStatus = req.session.deck.includes(deleteId);

            // 2.2 Si oui, on la retire de session.deck
            if(deckStatus) {
                req.session.deck = req.session.deck.filter((card) => card !== deleteId);
                console.log(`La carte #${deleteId} a été retiré du deck`);
            }

            console.log('Deck : ' + req.session.deck);

            // 3. Redirection vers le deck
            res.redirect('/deck')
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
}

module.exports = deckController;