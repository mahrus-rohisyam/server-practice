import bcrypt from 'bcrypt'

const data = {
  username: 'russdev',
  password: {
    hash: '$2b$10$Mb4zKs0w0lQlswPpfUxoNuvKJhRKBpGdEOglZkE7gAJHGqcuNySAC',
    salt: '$2b$10$Mb4zKs0w0lQlswPpfUxoNu'
  }
}

let plainPassword = 'russthedev'

const {username, password} = data

const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(plainPassword, password.salt)
const verify = bcrypt.compareSync(plainPassword, password.hash)

console.log(hash)
console.log(salt)
console.log(verify)

/**
 * Output verify === true 
 */