import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgb(27, 27, 27);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  input,
  button {
    padding: 1rem;
    border: none;
    border-radius: .2rem;
    font-size: 1.1rem;
    outline: none;
  }

  button:hover {
    filter: brightness(.9);
    cursor: pointer;
  }
`
