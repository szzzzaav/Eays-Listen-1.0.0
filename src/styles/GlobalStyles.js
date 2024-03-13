import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --color--blue-100:#13132B;
    --color--blue-80:#1B1553;
    --color--blue-60:#241953;
    --color--blue-30:#1262a5;
    --color-blue-20:#535AAA;
    --color-blue-10:#626B96;
    --color-pink:#DFADB9;
    --color-purple:#724A91;
    --color-font-black:#222;
    --color-orange:#f9711a;
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }
  
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    user-select:none;
  }

  body{
    position: relative;
    z-index: 0;
  }

  a{
    text-decoration: none;
  }

  #root{
    position: relative;
    z-index: 0;
  }
`;

export default GlobalStyles;
