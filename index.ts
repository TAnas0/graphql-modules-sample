import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

export const FirstModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      books: [Book]
    }

    type Book implements Node {
      id: ID!
      title: String
    }
  `
})

export const SecondModule = new GraphQLModule({
  typeDefs: gql`
    interface Node {
      id: ID!
    }
  `
});




const app = express();

app.use('/graphql', graphqlHTTP({
  schema: FirstModule.schema,
  graphiql: true
}));

app.listen(4000);
