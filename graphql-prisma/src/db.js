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

const db = {
    users,
    posts,
    comments
}

export { db as default}