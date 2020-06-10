import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/global-styles"
import theme from "../styles/theme"

const Wrapper = styled.div<{ y?: string }>`
  position: relative;
  padding: 2.5rem;
  transition: all 0.5s ease-out;
  transform: translateY(${p => p.y ?? 0});
  & > section:not(:first-of-type) {
    margin-top: 5rem;
  }
`

const layout: React.FC<{ y?: string }> = ({ children, y }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper y={y}>
        <GlobalStyles />

        {children}
      </Wrapper>
    </ThemeProvider>
  )
}

export default layout
