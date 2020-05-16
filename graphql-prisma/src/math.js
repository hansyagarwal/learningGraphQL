const add = (a,b)=>{
    return a+b
}

const subtract = (a,b)=>{
    return b-a
}

export {add as default, subtract}

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

// prisma.mutation.createPost({
//     data:{
//         title: "GraphQL 102",
//         body: "ok",
//         published: false,
//         author:{
//             connect: {
//                 id: "cka5rotlt00ju08364w74a8es"
//             }
//         }
//     }
// },'{id title body published}').then((data)=>{
//     console.log(data)
//     return prisma.query.users(null,'{ id name posts { id title } }')
// }).then((data)=>{
//     console.log(JSON.stringify(data,undefined, 2))
// })

// prisma.mutation.updatePost({
//     data:{
//         body: "new ok",
//         published: true
//     },
//     where:{
//         id: "cka9t8jof00590836d46iszbm"
//     }
// },'{id title body published}').then((data)=>{
//     console.log(data)
//     return prisma.query.posts(null,'{id title body published}')
// }).then((data)=>{
//     console.log(JSON.stringify(data, undefined, 2))
// })