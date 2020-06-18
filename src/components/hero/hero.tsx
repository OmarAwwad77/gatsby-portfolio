import React, { useRef } from "react"
import { useChain, useSpring, ReactSpringHook } from "react-spring"

import { Wrapper, Lines, Line, H1, P, PortfolioButton } from "./hero.styles"

interface OwnProps {
  current: boolean
}

const hero: React.FC<OwnProps> = ({ current }) => {
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
      <Lines withImg>
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
        <Line />
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
      </Lines>
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
