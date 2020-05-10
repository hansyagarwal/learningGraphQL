import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import User from './resolvers/User'

//Scalar types: String, Boolean, Int, Float, ID
//Demo user data

//Type definitions aka application schema
// const typeDefs = `    
// `

//Resolvers
const resolvers = {
    //Query: ,
    //Mutation: ,
    //Post: ,
    //Comment: ,
    //User: 
}

const server = new GraphQLServer({
    //typeDefs: typeDefs,
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        User,
        Post,
        Comment
    },
    context: {
        db: db
    }
})

server.start(()=>{
    console.log('The server is up')
})