import React from "react"
import { Section as Wrapper } from "./about.styles"

interface OwnProps {
  anim?: "enter" | "leave"
  dir?: "top" | "bottom"
  current: boolean
}
const about: React.FC<OwnProps> = ({ dir, anim, current }) => {
  return <Wrapper current={current}></Wrapper>
}

export default about
