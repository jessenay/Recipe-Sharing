// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals
import { gql } from '@apollo/client';

// Important for useMutation: Each mutation we'd like to be able to perform gets exported out of our mutations.js utility
export const CREATE_ACCOUNT = gql`
  mutation createAccount($username: String!, $email: String!, $password: String!) {
    createAccount(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RECIPE = gql`
mutation addRecipe($title: String, $description: String, $image: String, $prepTime: String, $cookTime: String, $ingredients: [String], $instructions: [String]) {
  addRecipe(title: $title, description: $description, image: $image, prepTime: $prepTime, cookTime: $cookTime, ingredients: $ingredients, instructions: $instructions) {
    _id
    username
    email
    recipes {
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
