import styled, { keyframes } from "styled-components"
export { Section } from "../../styles/general-components"

export const TextArea = styled.div`
  width: 75%;
  height: 100%;
`

export const Polygon = styled.div`
  position: relative;
  z-index: 1;
  width: 35rem;
  height: 100%;
  background: ${p => p.theme.colors.secondary};
  clip-path: polygon(0 0, 35% 0, 100% 100%, 0% 100%);
`

export const Image = styled.div<{ url: string }>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 2.5rem;
  width: 35rem;
  height: 60rem;
  border-radius: 1.5rem;
  transform: translateY(-50%);
  background: url(${p => p.url}) center/cover no-repeat;
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

export const Lines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`
