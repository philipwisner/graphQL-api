const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const _ = require('lodash');

const {movieType} = require('./types.js');
let {movies} = require('./data.js');

//Define the Query
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,

      resolve: function () {
        return "Hello World";
      }
    },

    movie: {
      type: movieType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: function (source, args) {
        return _.find(movies, {
          id: args.id
        });
      }
    },
    director: {
      type: directorType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: function (source, args) {
        return _.find(directors, {
          id: args.id
        });
      }
    }
  }
});

//fields are where you specify the endpoints
//resolve indicates action to take when endpoint is called
//args is used to indicate the  input to the movie endpoint

exports.queryType = queryType;