const db = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await db.query(query);
    return result.rows;
  },

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

  async getCardsByParams(params, element) {
    const query = {
      text: `SELECT * FROM card WHERE ${params} = $1`,
      values: [element]
    }
    const result = await db.query(query);
    if (!result.rowCount){
      throw new Error ('Pas de carte trouvée')
    }
    return result.rows
  }

};


module.exports = dataMapper;
