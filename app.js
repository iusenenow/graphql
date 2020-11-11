const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')


const app = express()

app.use("/graphql", graphqlHTTP({
  schema
}))

app.listen(9000, () => console.log('Listening for requests on port 9000.'))