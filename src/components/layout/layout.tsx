import React, { useState, useRef } from "react"
import { ThemeProvider } from "styled-components"
import { useSpring, useChain, ReactSpringHook } from "react-spring"
import GlobalStyles from "../../styles/global-styles"
import theme from "../../styles/theme"
import Nav from "../nav/nav"
import NavControls from "../nav-controls/nav-controls"
import { Helmet } from "react-helmet"
import { MenuIcon, MenuIconWrapper, Wrapper, OverLay } from "./layout.styles"

interface Props {
  y?: string
}

const Layout: React.FC<Props> = ({ children, y }) => {
  const [showNav, setShowNav] = useState<boolean>()

  // const overlaySpringRef = useRef<ReactSpringHook>(null)

  const { overlaySize } = useSpring({
    from: {
      overlaySize: 0,
    },
    overlaySize: showNav ? 100 : 0,
    // ref: overlaySpringRef,
  })

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
        <title>Awwad</title>
      </Helmet>
      <MenuIconWrapper onClick={() => setShowNav(prev => !prev)}>
        <MenuIcon />
      </MenuIconWrapper>

      <OverLay
        onClick={() => setShowNav(false)}
        style={{
          width: overlaySize.interpolate(size => `${size}vw`),
          height: overlaySize.interpolate(size => `${size}vh`),
        }}
      />
      <Nav onClick={() => setShowNav(false)} show={showNav} />
      <NavControls />

      <Wrapper y={y}>
        {children}
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
