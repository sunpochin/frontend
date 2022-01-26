import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'john doe 1',
    email: 'johndoe1@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jane doe 1',
    email: 'jane1@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]


export default users;
