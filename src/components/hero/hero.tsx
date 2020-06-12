import React from "react"
import { Wrapper, Lines, Line, H1, P, PortfolioButton } from "./hero.styles"

interface OwnProps {
  anim?: "enter" | "leave"
  dir?: "top" | "bottom"
  current: boolean
}

const hero: React.FC<OwnProps> = ({ anim, dir, current }) => {
  return (
    <Wrapper current={current}>
      <Lines withImg>
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
        <Line />
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
      </Lines>
      <H1>
        Hello!,
        <br /> I'm <span>omar awwad</span> <br />
        Front-end web developer
      </H1>
      <P>MERN full stack developer in the making</P>
      <PortfolioButton>
        <span>my portfolio</span>
      </PortfolioButton>
    </Wrapper>
  )
}
export default hero
