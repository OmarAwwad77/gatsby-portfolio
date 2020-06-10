import React from "react"
import { Section as Wrapper, Lines, Line } from "./hero.styles"

interface OwnProps {
  anim?: "enter" | "leave"
  dir?: "top" | "bottom"
  current: boolean
}

const hero: React.FC<OwnProps> = ({ anim, dir, current }) => {
  return (
    <Wrapper current={current}>
      <Lines>
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
        <Line />
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
      </Lines>
    </Wrapper>
  )
}
export default hero
