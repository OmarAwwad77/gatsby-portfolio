import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/global-styles"
import theme from "../styles/theme"
import Nav from "../components/nav/nav"
import NavControls from "../components/nav-controls/nav-controls"
import { Helmet } from "react-helmet"

const Wrapper = styled.div<{ y?: string }>`
  position: relative;
  padding: ${p => p.theme.layoutPadding + "rem"};
  transition: all 0.5s ease-out;
  transform: translateY(${p => p.y ?? 0});
  & > *:not(:first-child) {
    margin-top: ${p => p.theme.layoutPadding * 2 + "rem"};
  }
`

interface Props {
  y?: string
}

const Layout: React.FC<Props> = ({ children, y }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Nav />
      <NavControls />

      <Wrapper y={y}>
        {children}
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
