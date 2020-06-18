import { createGlobalStyle, css } from "styled-components"
import media from "./media-queries"

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      font-size: 62.5%;
      box-sizing: border-box;
      
      ${media.BREAK_POINT_1100PX(css`
        font-size: 60%;
      `)}
      ${media.BREAK_POINT_700PX(css`
        font-size: 55%;
      `)}
      ${media.BREAK_POINT_450PX(css`
        font-size: 51%;
      `)}
    }
    body {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6;
      background: ${p => p.theme.colors.background};
      color: ${p => p.theme.colors.text};
      overflow: hidden;
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
      font-family: 'IBM Plex Sans', sans-serif;
    }

`
