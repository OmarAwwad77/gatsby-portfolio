import styled, { css } from "styled-components"

export const Section = styled.section<{ current: boolean }>`
  position: relative;
  height: calc(100vh - 5rem);
  transform: scale(${p => (p.current ? 1 : 0.91)});
  background: ${p => p.theme.colors.main};
  transition: all 0.3s 0.5s ease-out;
`
