import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; /* Para navegadores WebKit (como Chrome e Safari) */
  }

  :focus {
    outline: none;
    box-shadow: 0 0 2px;
  }

  body {
    background: #071422;
    -webkit-font-smoothing: antialiased; /* Para navegadores WebKit (como Chrome e Safari) */
  }
`
