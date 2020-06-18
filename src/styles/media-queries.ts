import {
  FlattenInterpolation,
  DefaultTheme,
  ThemeProps,
  css,
  ThemedStyledProps,
} from "styled-components"
import theme from "../styles/theme"

export type ThemedProps<P> = ThemedStyledProps<P, typeof theme>
type Css = FlattenInterpolation<ThemeProps<DefaultTheme>>
type BreakPointsKeys = keyof typeof breakPoints
type MediaQueryFun = (css: Css, type?: "min-width" | "max-width") => Css
type MediaQueries = {
  [key in BreakPointsKeys]: MediaQueryFun
}

const breakPoints = {
  BREAK_POINT_1100PX: "1100px",
  BREAK_POINT_990PX: "990px",
  BREAK_POINT_900PX: "900px",
  BREAK_POINT_700PX: "700px",
  BREAK_POINT_520PX: "520px",
  BREAK_POINT_450PX: "450px",
}

const breakPointKeys = Object.keys(breakPoints) as BreakPointsKeys[]

export default breakPointKeys.reduce((acc, curr) => {
  acc[curr] = (styles, type = "max-width") =>
    type === "max-width"
      ? css`
          @media only screen and (max-width: ${breakPoints[curr]}) {
            ${styles}
          }
        `
      : css`
          @media only screen and (min-width: ${breakPoints[curr]}) {
            ${styles}
          }
        `

  return acc
}, {} as MediaQueries)

// utilities

export const cannotHover: MediaQueryFun = styles => css`
  @media (hover: none) {
    ${styles}
  }
`

export const canHover: MediaQueryFun = styles => css`
  @media (hover: hover) {
    ${styles}
  }
`
