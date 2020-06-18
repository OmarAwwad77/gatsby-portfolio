import styled, { css } from "styled-components"
import { animated } from "react-spring"
import { Section, Lines, Line } from "../../styles/general-components"
import media from "../../styles/media-queries"
export { Lines, Line }

export const Wrapper = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

export const Scrollbar = styled.div`
  position: absolute;
  right: 9%;
  width: 4rem;
  height: 60%;
  display: flex;
  justify-content: center;
  &::after {
    background: #69696973;
    content: "";
    height: 100%;
    width: 1px;
  }

  ${media.BREAK_POINT_900PX(css`
    right: 2%;
  `)}

  ${media.BREAK_POINT_450PX(css`
    right: 0%;
  `)}
`

export const ScrollController = styled.span<{ transition?: boolean }>`
  position: absolute;
  color: ${p => p.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewY(55deg);
  border-radius: 5rem;
  transition: ${p => p.transition && "all 0.2s ease-in-out"};
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
  width: 90%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: top;
`
