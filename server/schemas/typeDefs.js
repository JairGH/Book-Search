const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: ID
    image: String
    link: String
  }

  type Query {
    me: User
    users: [User]
    user(userId: ID): User
  }

  #? double check.
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, username: String): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;
