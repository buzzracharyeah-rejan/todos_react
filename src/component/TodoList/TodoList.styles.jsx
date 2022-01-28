import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .form-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    margin: 1rem 0;

    .form-control {
    }
    .form-input {
      border: 1px solid #767676;
      padding: 5px 2.5rem;
      border-radius: 4px;
      width: 20rem;
      height: 1.2rem;
    }

    .button {
      padding: 8px 2.2rem;
      text-transform: capitalize;
      cursor: pointer;
      background-color: #75b875;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
  }
`;
export const TodoContainer = styled.div``;
