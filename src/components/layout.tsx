import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/global-styles"
import theme from "../styles/theme"

const Wrapper = styled.div``

const layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  )
}

export default layout
