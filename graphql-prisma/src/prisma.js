import {Prisma} from 'prisma-binding'
import {fragmentReplacements} from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'secretok',
    fragmentReplacements
})

export {prisma as default}

//prisma.query prisma.mutation prisma.subscription prisma.exists

// const createPostForUser = async (authorId, data)=>{

//     const userExists = await prisma.exists.User({id: authorId})

//     if(!userExists) {
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data:{
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author{ id name email posts {id title published } } }')
//     return post.author
// }

// // createPostForUser('cka5qy9ps00do0836zfyzhjx2',{
// //     title: 'Greate books to read',
// //     body: 'The Art of war',
// //     published: true
// // }).then((user)=>{
// //     console.log(JSON.stringify(user, undefined, 2))
// // }).catch((error)=>{
// //     console.log(error.message)
// // })

// const updatePostForUser = async (postId, data)=>{
//     const postExists = await prisma.exists.Post({id: postId})

//     if(!postExists) {
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         data,
//         where:{
//             id: postId
//         }
//     }, '{ author{ id name email posts { id title published } } }')
//     return post.author
// }

// updatePostForUser('cka9ubdgm00n50836vbrtoip2',{
//     published: false
// }).then((user)=>{
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error)=>{
//     console.log(error.message)
// })