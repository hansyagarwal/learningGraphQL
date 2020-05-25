import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import User from './resolvers/User'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({ //typeDefs: typeDefs,
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription,
        User,
        Post,
        Comment
    },
    context(request) {
        return {
            db: db,
            pubsub,
            prisma,
            request
        }
    }
})

server.start(()=>{
    console.log('The server is up')
})