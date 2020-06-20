import styled, { keyframes, css } from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Section = styled.section<{ current: boolean }>`
  position: relative;
  height: calc(100vh - ${p => p.theme.layoutPadding * 2 + "rem"}) !important;
  transform: scale(${p => (p.current ? 1 : 0.88)}) rotate(0.02deg);
  backface-visibility: hidden;
  background: ${p => p.theme.colors.main};
  transition: all 0.3s 0.5s ease-out;
`

const lineAnimOdd = keyframes`
  50%{
    top: calc(100% - 3rem)
  }

  100%{
    top: 0;
  }
`

const lineAnimEven = keyframes`
  50%{
    top: 0
  }

  100%{
    top: calc(100% - 3rem)
  }

`

export const Line = styled.div<{ delay?: string }>`
  position: relative;
  width: 1px;
  background: #69696930;
  backface-visibility: hidden;

  &::after {
    content: "";
    position: absolute;
    background: #f7eeee38;
    width: 2px;
    height: 3rem;
    top: 0%;
    animation: ${lineAnimOdd} 15s linear ${p => p.delay} infinite alternate
      forwards;
    backface-visibility: hidden;
  }
  &:nth-child(even)::after {
    top: calc(100% - 3rem);
    animation: ${lineAnimEven} 15s linear ${p => p.delay} infinite alternate
      forwards;
  }
`

const linesStyles = css`
  position: absolute !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const Lines = styled.div`
  ${linesStyles}
`

export const LinesWithBg = styled(BackgroundImage)`
  ${linesStyles}
  background-color: #2523246b;
  background-blend-mode: soft-light;
`

export const Icon = styled.svg`
  position: relative;
  z-index: 1;
  color: ${p => p.theme.colors.main};
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
`

export const IconWrapper = styled.div<{ nav?: boolean }>`
  background: ${p => p.theme.colors.secondary};
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  padding: 1rem;
  cursor: pointer;

  ${p =>
    p.nav &&
    css`
      &::after {
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 5rem;
        position: absolute;
        top: 0;
        right: 0%;
        background: transparent;
        transition: all 0.3s ease-out;
      }
    `}
`
