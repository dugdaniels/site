import { css } from "@emotion/core"
import colors from "./colors"

const base = css`
  @import url("https://rsms.me/inter/inter.css");

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", sans-serif;
    }
  }

  * {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  body {
    background: #fff;
    color: #111;
    font-family: "Inter", -system-ui, system-ui, sans-serif;
    font-size: 14px;
    letter-spacing: -0.006;
    line-height: 1.5;

    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    scroll-behavior: smooth;
    font-feature-settings: "calt" 1, "kern" 1, "liga" 1;
  }

  @supports (font-variation-settings: normal) {
    body {
      font-family: "Inter var", -system-ui, system-ui, sans-serif;
    }
    body.chrome-win {
      /* Chrome has some VF issues; worst are on Windows with incorrect kerning.
       We disable VF on Chrome on Windows for that reason.
    */
      font-family: Inter, -system-ui, system-ui, sans-serif;
    }
  }

  div.breaker {
    clear: both;
  }

  p,
  ul,
  ol,
  pre,
  blockquote,
  hr,
  object {
    margin: 1em 0;
  }
  li {
    margin-bottom: 0.5em;
  }
  pre,
  code,
  tt {
    font-family: "IBM Plex Mono", monospace;
    font-feature-settings: "ss02" 1, "zero" 1;
    /* ss01=a.1, ss02=g.1, ss03=zero.1, ss04=zero.2 */
  }
  img {
    border: none;
    vertical-align: bottom;
  }
  hr {
    height: 1px;
    border: none;
    background-color: #ddd;
  }
  strong,
  b {
    font-weight: 600;
    color: #010101;
  }

  /* headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    color: #010101;
    margin: 1.618em 0 0.7em 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-size: 80px;
    letter-spacing: -0.05em;
    font-weight: 700;
    line-height: 1.1;
    margin-left: -2px;
  }
  h2 {
    font-size: 24px;
    letter-spacing: -0.019em;
    font-weight: 700;
    line-height: 1.35;
    margin-left: -0.5px;
  }
  h3 {
    font-size: 16px;
    letter-spacing: -0.011em;
    font-weight: 700;
    line-height: 1.35;
  }
  h4 {
    font-size: 18px;
    letter-spacing: -0.014em;
    font-weight: 500;
    line-height: 1.35;
  }
  h5,
  h6 {
    font-size: 18px;
    letter-spacing: -0.014em;
    margin: 1em 0 -0.2em 0;
  }

  /* anchors */
  a[href] {
    text-decoration: none;
    color: ${colors.blue};
  }
  a[href]:hover {
    text-decoration: underline ${colors.blue};
  }
  a[href^="#"]:hover {
    text-decoration-style: dashed;
  }
  ::selection {
    background: ${colors.yellow};
    text-shadow: none;
  }

  a.img {
    border: none;
    background: transparent !important;
  }

  /* anchors: headings */
  h1 > a,
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a,
  h1 > a:hover,
  h2 > a:hover,
  h3 > a:hover,
  h4 > a:hover,
  h5 > a:hover,
  h6 > a:hover {
    color: inherit !important;
    background-color: transparent !important;
  }

  /* small screens */
  @media only screen and (max-device-width: 480px) {
    h1 {
      font-size: 40px;
      margin-left: -1px;
    }
    h2 {
      font-size: 21px;
      letter-spacing: 0;
      margin-left: 0;
    }
    h3 {
      font-size: 17px;
      letter-spacing: 0;
    }
    h4,
    h5,
    h6 {
      font-size: 16px;
    }
  }
`

export default base
