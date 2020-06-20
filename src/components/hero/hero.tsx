import React, { useRef } from "react"
import styled from "styled-components"
import { useChain, useSpring, ReactSpringHook } from "react-spring"
import {
  Wrapper,
  LinesWithBg,
  Line,
  H1,
  P,
  PortfolioButton,
} from "./hero.styles"
import { graphql, useStaticQuery } from "gatsby"

interface OwnProps {
  current: boolean
}

const hero: React.FC<OwnProps> = ({ current }) => {
  const {
    background: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const h1SpringRef = useRef<ReactSpringHook>(null)
  const pSpringRef = useRef<ReactSpringHook>(null)
  const buttonSpringRef = useRef<ReactSpringHook>(null)

  const h1AnimProps = useSpring({
    from: { transform: `translateY(-70vh)` },
    transform: `translateY(0vh)`,
    ref: h1SpringRef,
  })

  const pAnimProps = useSpring({
    from: { transform: `translateX(-70vw)` },
    transform: `translateX(0vh)`,
    ref: pSpringRef,
  })

  const buttonAnimProps = useSpring({
    from: { transform: `translateY(70vh)` },
    transform: `translateY(0vh)`,
    ref: buttonSpringRef,
  })

  useChain([h1SpringRef, buttonSpringRef, pSpringRef])

  return (
    <Wrapper current={current}>
      <LinesWithBg Tag="div" fluid={fluid}>
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
        <Line />
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
      </LinesWithBg>
      <H1 style={h1AnimProps}>
        Hello!,
        <br /> I'm <span>omar awwad</span> <br />
        Front-end web developer
      </H1>
      <P style={pAnimProps}>Javascript/React Ninja</P>
      <PortfolioButton style={buttonAnimProps}>
        <span>my portfolio</span>
      </PortfolioButton>
    </Wrapper>
  )
}
export default hero
