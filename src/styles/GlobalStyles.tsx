import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #F0F0F6;
        font-family: 'Inter', sans-serif;
        ul, ol {
            list-style: none;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        h2 {
            font-size: 32px;
        }
        h3 {
            font-size: 24px;
        }
        h4{
            font-size: 18px;
            font-weight: 500;
        }
        p {
            font-size: 15px;
            color: #767676;
        }
    }
`