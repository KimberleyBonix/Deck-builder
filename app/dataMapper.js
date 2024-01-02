const db = require('./database');

const dataMapper = {

  // Get all columns from the "card" table
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await db.query(query);
    return result.rows;
  },

  // Get a card with ID
  async getCard(cardId) {
    const query = {
      text: `SELECT * FROM card WHERE id = $1;`,
      values: [cardId]
    }
    const result = await db.query(query);
    if (!result.rowCount){
      throw new Error ('Pas de carte trouvée')
    }

    return result.rows[0];
  },

  // Get a card with custom parameters
  async getCardsByParams(params, value) {
    const query = {
      text: `SELECT * FROM card WHERE ${params} = $1`,
      values: [value]
    }
    const result = await db.query(query);
    if (!result.rowCount){
      throw new Error ('Pas de carte trouvée')
    }
    return result.rows
  },

  // Get a card by name
  async getCardsByName(name) {
    const query = {
      text: `SELECT * FROM card WHERE name ILIKE $1`,
      values: ['%'+ name + '%']
    }
    const result = await db.query(query);
    return result.rows;
  }

};


module.exports = dataMapper;
