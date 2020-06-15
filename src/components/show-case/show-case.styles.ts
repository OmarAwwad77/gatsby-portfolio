import styled from "styled-components"
import { animated } from "react-spring"
import { Section } from "../../styles/general-components"

export const Wrapper = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`

export const Scrollbar = styled.div`
  position: absolute;
  right: 11rem;
  width: 4rem;
  height: 70%;
  display: flex;
  justify-content: center;
  &::after {
    background: #69696973;
    content: "";
    height: 100%;
    width: 1px;
  }
`

export const ScrollController = styled.span`
  position: absolute;
  color: ${p => p.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewY(55deg);
  border-radius: 5rem;
  background: ${p => p.theme.colors.main};
  cursor: pointer;
  .project-number,
  .projects-total {
    transform: skewY(-55deg);
  }
  .division {
    padding: 0 0.1rem;
    transform: skewY(-55deg) rotate(23deg);
  }
`

export const Projects = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 70rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: top;
  /* border: 2px solid red; */
`

export const Project = styled.div`
  position: relative;
  width: 90%;
  height: calc(100vh - ${p => p.theme.layoutPadding * 2 + "rem"});
  /* border: 2px solid green; */

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
`
