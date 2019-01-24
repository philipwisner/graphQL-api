const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');


//Define the Query
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,

      resolve: function () {
        return "Hello World";
      }
    }
  }
});

//fields are where you specify the endpoints
//resolve indicates action to take when endpoint is called

exports.queryType = queryType;