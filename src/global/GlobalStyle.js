import { createGlobalStyle } from 'styled-components';
import "@fontsource/montserrat";
 
const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
  }
`;
 
export default GlobalStyle;