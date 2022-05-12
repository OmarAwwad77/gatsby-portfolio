import styled, { css } from "styled-components"
import { animated } from "react-spring"
import InfoField from "../info-field/info-field"
import BackgroundImage from "gatsby-background-image"
import media from "../../styles/media-queries"

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${p => p.theme.layoutPadding * 2 + "rem"});
  display: flex;
  align-items: center;
  justify-content: center;
  &, &:hover, &:active, &:focus{
    text-decoration: none;
    color: inherit;
  } 
  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media.BREAK_POINT_450PX(css`
    justify-content: initial;
    padding-left: 1rem;
  `)}
`

export const Content = styled.div`
  position: relative;
  height: 43rem;
  width: 90rem;
  transition: all 0.2s ease-out;

  ${media.BREAK_POINT_1100PX(css`
    height: 51rem;
    width: 67rem;
  `)}

  ${media.BREAK_POINT_900PX(
    css`
      &:hover > div:not(:hover) {
        transform: scale(0.9) !important;
        z-index: 0;
      }
    `,
    "min-width"
  )}

  ${media.BREAK_POINT_900PX(css`
    height: 85%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `)}

  ${media.BREAK_POINT_450PX(css`
    width: 95%;
  `)}
`

// export const ProjectImg = styled(animated.div)<{ url: string }>`
//   position: relative;
//   z-index: 1;
//   width: 60rem;
//   height: 43rem;
//   background: url(${p => p.url}) center/cover no-repeat;
//   box-shadow: 10px 7px 20px 3px #000;
//   border-radius: 1rem;
//   backface-visibility: hidden;
//   transition: all 0.2s ease-out;
//   ${media.BREAK_POINT_900PX(css`
//     width: 100%;
//     height: 65%;
//   `)}
//   ${media.BREAK_POINT_450PX(css`
//     height: 70%;
//   `)}
// `

export const ProjectImgWrapper = styled(animated.div)`
  position: relative;
  z-index: 1;
  width: 60rem;
  height: 43rem;
  box-shadow: 10px 7px 20px 3px #000;
  overflow: hidden;
  border-radius: 1rem;
  backface-visibility: hidden;
  transition: all 0.2s ease-out;

  ${media.BREAK_POINT_900PX(css`
    width: 100%;
    height: 65%;
  `)}
  ${media.BREAK_POINT_450PX(css`
    height: 70%;
  `)}
`
export const ProjectImg = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`

export const ProjectImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: transparent;
  background-image: linear-gradient(
    to bottom left,
    transparent 10%,
    #000000bf 60%
  );
  display: none;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding: 1rem;
  color: #fff;

  ${media.BREAK_POINT_450PX(css`
    background-image: linear-gradient(
      to bottom left,
      transparent 10%,
      #000000bf 60%
    );
  `)}

  .description {
    text-align: center;
    .stack {
      flex-wrap: wrap;
      justify-content: center;
      display: none;
    }
    ${media.BREAK_POINT_450PX(css`
      & .text {
        display: none;
      }
      & .stack {
        display: flex;
      }
    `)}
  }

  ${media.BREAK_POINT_900PX(css`
    display: flex;
  `)}
`
export const Stack = styled(InfoField)`
  display: none;
  margin-top: 2rem;
  width: 100%;
  max-width: unset;
  ${media.BREAK_POINT_900PX(css`
    display: flex;
  `)}

  ${media.BREAK_POINT_450PX(css`
    display: none;
  `)}
`

export const Links = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media.BREAK_POINT_450PX(css`
    right: unset;
    left: 1;
    top: 25%;
    justify-content: start;
  `)}
`

export const ProjectInfoWrapper = styled.div`
  position: relative;
  z-index: 1;
  left: 33.3%;
  top: -100%;
  width: 60rem;
  height: 43rem;
  transition: all 0.2s ease-out;
  backface-visibility: hidden;
  transform: rotate(0.02deg);

  ${media.BREAK_POINT_1100PX(css`
    left: 10%;
    top: -60%;
  `)}

  ${media.BREAK_POINT_900PX(css`
    display: none;
  `)}
`

/*
  200px
  3:2 = 5
  200/5 = 40
  3 * 40 = 120
  2 * 40 = 80

  80/120*100 = 66.6

*/

/*
  200px
  16:9 = 25
  200/25 = 8
  16 * 8 = 128
  9 * 8 = 72

  72/128*100 = 56.25

*/
