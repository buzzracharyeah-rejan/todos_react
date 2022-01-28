import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  width: 60vw;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .form-group {
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-transform: capitalize;
  }

  .form-control {
    padding: 1rem 1.25rem;
    margin: 0 auto;
    background-color: #f1f1f1;
    border: none;
    margin-right: 1rem;
  }

  .form-label {
    padding: 1rem;
  }

  .button {
    padding: 8px 2.25rem;
    cursor: pointer;
    background: #cafaca;
    border: none;

    :hover {
      background: #e4fce4;
    }
  }

  .error {
    color: red;
  }
`;
