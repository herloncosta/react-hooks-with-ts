import styled from "styled-components";

export const AppContainer = styled.div`
  .container {
    width: 50rem;
    margin: 20rem auto;

    h1 {
      color: #fff;
      text-align: center;
    }

    form {
      width: 30rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 0 auto;
    }

    p {
      color: #fff;
      text-align: center;
      font-size: 2rem;
    }

    .group-buttons {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      button {
        width: 50%;
      }
    }
  }
`;
