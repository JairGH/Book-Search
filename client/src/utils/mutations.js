import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String, $email: String, $password: String) {
    addUser(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput) {
    saveBook(input: $input) {
      _id
      bookCount
      email
      password
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      user {
        _id
        username
      }
    }
  }
`;
