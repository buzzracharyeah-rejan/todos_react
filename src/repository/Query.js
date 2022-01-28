import { gql } from '@apollo/client';

export const TODOS = gql`
  query {
    Todos {
      id
      title
      body
      done
      author {
        name
        email
      }
    }
  }
`;

export const USERS = gql`
  query {
    Users {
      id
      name
      email
      password
      age
      married
    }
  }
`;
