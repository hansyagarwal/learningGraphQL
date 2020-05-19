const Query = {
    users(parent, args, {prisma}, info) {
        const opArgs = {}

        if(args.query){
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }, {
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)
    },
    posts(parent, args, {prisma}, info) {
 
        const opArgs = {}

        if(args.search){
            opArgs.where = {
                OR: [{
                    title_contains: args.search
                }, {
                    body_contains: args.search
                }]
            }
        }

        return prisma.query.posts(opArgs,info)

    },
    comments(parent,args,{prisma},info) {

        return prisma.query.comments(null, info)
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
}

export {Query as default}