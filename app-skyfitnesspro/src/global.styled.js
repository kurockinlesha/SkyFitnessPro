import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: "StratosSkyeng";
    src:
      local("StratosSkyeng"),
      local("StratosSkyeng"),
      url("/fonts/StratosSkyeng.woff2") format("woff2"),
      url("/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

html,
body {
    font-family: "StratosSkyeng", sans-serif;
    font-weight: 700;
    width: 100%;
    height: 100%;
    background: #FAFAFA;
    color: #000;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
    
}

a {
    text-decoration: none;
    cursor: pointer;
}
`;
