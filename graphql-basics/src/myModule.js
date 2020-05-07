//Named export - Has a name
//Default export

const message = 'Some msg from module'
const name = 'Aryan'

const location = 'Jaipur'

const getGreeting = (name) =>{
    return `Welcome to the course ${name}`
}

export { message, name, getGreeting, location as default }