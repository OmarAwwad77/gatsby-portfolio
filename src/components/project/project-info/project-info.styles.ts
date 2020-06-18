import styled, { css } from "styled-components"
import { animated } from "react-spring"
export { Icon, IconWrapper } from "../../../styles/general-components"
export { Tag } from "../../info-field/info-field.styles"
import media from "../../../styles/media-queries"

export const Wrapper = styled(animated.div)`
  position: relative;
  top: 10%;
  height: 80%;
  width: 100%;
  background: ${p => p.theme.colors.background};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.BREAK_POINT_900PX(css`
    height: 100%;
    width: 100%;
    top: 0;
  `)}
`

export const Count = styled.span`
  color: ${p => p.theme.colors.secondary};
`

export const Name = styled.span`
  font-size: 2rem;
  color: ${p => p.theme.colors.secondary};
`

export const Description = styled.span``

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Links = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`
