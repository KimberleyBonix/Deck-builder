# Deckbuilder 

## About

The deckbuilder was an opportunity to understand how a database and a server work together. The database was pretty simple (one table `card`) but it has a good number of columns to create a datamapper with different requests. 

It was enough to build some controllers and manage how to display the wanted data in the right routes. 

The use of session was a good introduction to handle the storage of the users interactions and informations.

### → [Checkout the demo](https://deck-builder-bice.vercel.app/)

## Technologies
- Server run with NodeJS and [Express](https://expressjs.com/) and [Express Session](https://www.npmjs.com/package/express-session)
- Database build with SQL and [PostgreSQL](https://www.postgresql.org/)

## Features

- Display a homepage with all the data
- Add/remove card to a deck
- Store the dack in a session
- Search cards with different parameters

***

![demo](./public/visuals/deckbuilder_demo.gif)