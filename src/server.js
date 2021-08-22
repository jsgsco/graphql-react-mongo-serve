import { GraphQLServer } from 'graphql-yoga'
import path from 'path'

import resolvers from './gql/resolvers'

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, "gql/schema.graphql"),
    resolvers
})