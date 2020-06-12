import styled, { keyframes, css } from "styled-components"

export const Section = styled.section<{ current: boolean }>`
  position: relative;
  height: calc(100vh - 5rem) !important;
  transform: scale(${p => (p.current ? 1 : 0.88)});
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

export const Lines = styled.div<{ withImg?: boolean }>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  ${p =>
    p.withImg &&
    css`
      background: url("https://images.unsplash.com/photo-1591026433494-540fb0f481f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80")
          center/cover no-repeat,
        #252324c7;
    `}
  background-blend-mode: soft-light;
`
