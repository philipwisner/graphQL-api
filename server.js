const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const { queryType } = require('./query.js');

const port = 5000;
const app = express();

const schema = new GraphQLSchema({ query: queryType });

//Creates graphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
//schema can specify the endpoints, indicated input and output as what as what action should be done
//graphiql is a web UI to test endpoints


app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);