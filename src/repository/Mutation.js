import { gql } from '@apollo/client';
export const CREATE_TODO = gql`
  mutation ($data: createTodoInput!) {
    createTodo(data: $data) {
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
