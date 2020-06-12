import React from "react"
import { useTheme } from "styled-components"
import {
  Wrapper,
  Grid,
  Img,
  Title,
  GridWrapper,
  Lines,
  Line,
} from "./about.styles"
import { Scrollbars } from "react-custom-scrollbars"

interface OwnProps {
  anim?: "enter" | "leave"
  dir?: "top" | "bottom"
  current: boolean
}
const about: React.FC<OwnProps> = ({ dir, anim, current }) => {
  const { colors } = useTheme()

  const onWheelHandler = (e: React.WheelEvent<any>) => {
    const srElement = e.currentTarget.firstElementChild!
    const deltaY = e.deltaY
    const scrollHeight = srElement.scrollHeight - srElement.clientHeight
    const scrollTop = srElement.scrollTop
    if (!scrollHeight) return // only continue if it's scrollable

    if (scrollTop !== scrollHeight && scrollTop !== 0) {
      e.stopPropagation()
    } else if (
      (scrollTop === scrollHeight && deltaY < 0) ||
      (scrollTop === 0 && deltaY > 0)
    ) {
      e.stopPropagation()
    }
  }

  return (
    <Wrapper current={current}>
      <Lines>
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
        <Line />
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
      </Lines>
      <Scrollbars renderThumbVertical={() => <div />} onWheel={onWheelHandler}>
        <GridWrapper>
          <Grid>
            <Img
              url={
                "https://firebasestorage.googleapis.com/v0/b/connect-c44e6.appspot.com/o/images%2F1591360719246?alt=media&token=d7a57ccb-9409-4db0-bd1c-423a0c11b185"
              }
            />
            <Title>
              Hello!, I'm <span>Omar Awwad</span>
              <br /> Javascript/React Enthusiast
            </Title>
          </Grid>
        </GridWrapper>
      </Scrollbars>
    </Wrapper>
  )
}

export default about
