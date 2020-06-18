import styled, { css } from "styled-components"
import { animated } from "react-spring"
export {
  Section as Wrapper,
  Lines,
  Line,
} from "../../styles/general-components"

import media from "../../styles/media-queries"

export const Grid = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  grid-gap: 2rem 5rem;
  grid-template-areas:
    "img title title"
    "img text text"
    "img name age"
    "img email phone"
    "img education languages"
    "img university university"
    "skills skills skills"
    "learning learning learning";

  ${media.BREAK_POINT_990PX(css`
    justify-items: center;
    width: 100%;
    grid-template-areas:
      "title title"
      "text text"
      "img img"
      "name age"
      "email phone"
      "education languages"
      "university university"
      "skills skills"
      "learning learning";
  `)}

  ${media.BREAK_POINT_520PX(css`
    grid-template-areas:
      "title title"
      "text text"
      "img img"
      "name name"
      "age age"
      "email email"
      "phone phone"
      "education education"
      "languages languages"
      "university university"
      "skills skills"
      "learning learning";
  `)}
`
export const GridWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  padding: 2rem 0 2rem 3rem;
  ${media.BREAK_POINT_990PX(css`
    padding: 6rem 2rem 2rem 2rem;
  `)}
`

export const Img = styled(animated.div)<{ url: string }>`
  grid-area: img;
  align-self: center;
  width: 35rem;
  height: 50rem;
  border-radius: 1rem;
  background-image: url(${p => p.url});
  background-position: center 0;
  background-size: 55rem;
  background-repeat: no-repeat;
  box-shadow: 10px 8px 20px 1px #000;

  ${media.BREAK_POINT_520PX(css`
    width: 28rem;
  `)}
`

export const Title = styled(animated.h2)`
  grid-area: title;
  position: relative;
  color: #fff;
  font-size: 3.2rem;
  line-height: 1.4;
  font-weight: 300;
  text-transform: capitalize;
  span {
    color: ${p => p.theme.colors.secondary};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0%;
    background: ${p => p.theme.colors.secondary};
    width: 10rem;
    height: 0.1rem;
  }
  ${media.BREAK_POINT_990PX(css`
    text-align: center;
  `)}
`

export const AboutMe = styled(animated.p)`
  grid-area: text;
  padding: 1rem;
  padding-left: 0;
  ${media.BREAK_POINT_990PX(css`
    text-align: center;
  `)}
`
