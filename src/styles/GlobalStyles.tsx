import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${theme.colors.gradient.light};
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
            font-weight: 600;
        }
        h4{
            font-size: 18px;
            font-weight: 500;
        }
        p {
            font-size: 15px;
            font-weight: 400;
            color: ${theme.colors.gradient.lightGrey};
            line-height: 24px;
        }
    }
`