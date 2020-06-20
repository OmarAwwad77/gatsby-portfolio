import styled from "styled-components"
import { animated } from "react-spring"

export const Wrapper = styled(animated.div)`
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
