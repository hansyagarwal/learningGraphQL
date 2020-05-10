const Query = {
    users(parent, args, {db}, info) {
        if(!args.query) {
            return db.users
        }
        return db.users.filter((user)=>{
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, {db}, info) {
        if(!args.search) {
            return db.posts
        }
        return db.posts.filter((post)=>{
            const isTitle = post.title.toLowerCase().includes(args.search.toLowerCase())
            const isBody = post.body.toLowerCase().includes(args.search.toLowerCase())
            return isTitle || isBody
        })
    },
    comments(parent,args,{db},info) {
        return db.comments
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