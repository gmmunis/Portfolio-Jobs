const express = require('express')
const next = require('next')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// resolvers
const { portfolioResolvers } = require('./qraphql/resolvers/index');
// types
const { portfolioTypes } = require('./qraphql/types/index');

app.prepare().then(() => {
  const server = express()

  // Construct a schema, using GRAPHQL schema language
  const schema = buildSchema(`
      ${portfolioTypes}

      type Query {
        hello: String
        portfolio(id: ID): Porfolio
        portfolios: [Porfolio]
      }
  `);

  // The root provides a resolver for each API endpoint
  const root = {
    ...portfolioResolvers
  }

  server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }));

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})