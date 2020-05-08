import { GraphQLServer } from 'graphql-yoga'
import {v4 as uuidv4} from 'uuid'

//Scalar types: String, Boolean, Int, Float, ID

//Demo user data
const users = [{
    id: '1',
    name: 'Aryan',
    email: 'aryan@example.com',
    age: 20
}, {
    id: '2',
    name: 'Jess',
    email: 'jess@example.com',
    age: 20
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
    age: 20
}]

const posts = [{
    id: '1',
    title: 'Ajin',
    body: 'Manga',
    published: true,
    author: '1',
}, {
    id: '2',
    title: 'Breaking Bad',
    body: 'TV Series',
    published: false,
    author: '1',
}, {
    id: '3',
    title: 'Red Dead Redemption 2',
    body: 'Video Game',
    published: true,
    author: '2', 
}]

const comments = [{
    id: '1',
    text: 'amazing',
    author: '1',
    post: '1'
},{
    id: '2',
    text: 'GOTY',
    author: '2',
    post: '3'
},{
    id: '3',
    text: 'Worth it',
    author: '2',
    post: '3'
},{
    id: '4',
    text: 'ok bro',
    author: '1',
    post: '2'
}]

//Type definitions aka application schema
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(search: String): [Post!]!
        me: User!
        post: Post!
        comments: [Comment!]!
    }

    type Mutation {
        createUser(data: CreateUserInput!): User!
        createPost(data: CreatePostInput!): Post!
        createComment(data: CreateCommentInput!): Comment!
    }

    input CreateUserInput {
        name: String!
        email: String!
        age: Int
    }

    input CreatePostInput {
        title: String!
        body: String!
        published: Boolean!
        author: ID!
    }

    input CreateCommentInput {
        text: String!
        author: ID!
        post: ID!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
    }
`

//Resolvers
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if(!args.query) {
                return users
            }
            return users.filter((user)=>{
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },
        posts(parent, args, ctx, info) {
            if(!args.search) {
                return posts
            }
            return posts.filter((post)=>{
                const isTitle = post.title.toLowerCase().includes(args.search.toLowerCase())
                const isBody = post.body.toLowerCase().includes(args.search.toLowerCase())
                return isTitle || isBody
            })
        },
        comments(parent,args,ctx,info) {
            return comments
        },
        me() {
            return {
                id: '123098',
                name: 'Mike',
                email: 'mmike@gmail.com'
            }
        },
        post() {
            return {
                id: '42069',
                title: 'Ajin',
                body: 'Manga',
                published: true
            }
        }
    },
    Mutation: {
        createUser(parent,args,ctx,info) {
            const emailTaken = users.some((user)=> user.email === args.data.email)

            if(emailTaken) {
                throw new Error('Email taken.')
            }
            
            // const user = {
            //     id: uuidv4(),
            //     name: args.name,
            //     email: args.email,
            //     age: args.age
            // }

            const user = {
                id: uuidv4(),
                ...args.data
            }

            users.push(user)

            return user
        },
        createPost(parent,args,ctx,info) {
            const userExists = users.some((user)=> user.id === args.data.author)

            if(!userExists) {
                throw new Error('User not found')
            }

            const post = {
                id: uuidv4(),
                ...args.data
            }

            posts.push(post)

            return post
        },
        createComment(parent,args,ctx,info) {
            const userExists = users.some((user)=> user.id === args.data.author)
            const postExists = posts.some((post)=> post.id === args.data.post && post.published === true)

            if(!userExists) {
                throw new Error('User not found')
            }
            if(!postExists) {
                throw new Error('Post not found')
            }

            const comment = {
                id: uuidv4(),
                ...args.data
            }

            comments.push(comment)

            return comment
        }
    },
    Post: {
        author(parent,args,ctx,info) {
            return users.find((user)=>{
                return user.id === parent.author
            })
        },
        comments(parent,args,ctx,info) {
            return comments.filter((comment)=>{
                return comment.post === parent.id
            })
        }
    },
    Comment: {
        author(parent,args,ctx,info) {
            return users.find((user)=>{
                return user.id === parent.author
            })
        },
        post(parent,args,ctx,info) {
            return posts.find((post)=>{
                return post.id === parent.post
            })
        }
    },
    User: {
        posts(parent,args,ctx,info) {
            return posts.filter((post)=>{
                return post.author === parent.id
            })
        },
        comments(parent,args,ctx,info) {
            return comments.filter((comment)=>{
                return comment.author === parent.id
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

server.start(()=>{
    console.log('The server is up')
})