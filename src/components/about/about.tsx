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
  AboutMe,
} from "./about.styles"
import { Scrollbars } from "react-custom-scrollbars"
import InfoField from "../info-field/info-field"

interface Props {
  current: boolean
}
const About: React.FC<Props> = ({ current }) => {
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
      <Scrollbars
        style={{ transform: "translateZ(0)" }}
        renderThumbVertical={() => (
          <div style={{ background: colors.secondary }} />
        )}
        onWheel={onWheelHandler}
      >
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
            <AboutMe>
              I have been playing with react for a little over 2 years after one
              of my college professors advised me to give it a try and I have
              been in love with it ever since. After I graduated in july 2019
              with a Bachelor's degree in IT, I got a scholarship to pursue a
              master's degree in management information system. However after
              only one semester I decided to stop and work full-time instead.
            </AboutMe>
            <InfoField gridArea={"name"} label="Name" value="Omar Awwad" />
            <InfoField gridArea={"age"} label="Age" value="24" />
            <InfoField
              gridArea={"email"}
              label="Email"
              value="OmarAwwad010@gmail.com"
            />
            <InfoField
              gridArea={"phone"}
              label="Phone"
              value="+2 01116409608"
            />
            <InfoField
              gridArea={"education"}
              label="Education"
              value="Bsc. Information Technology"
            />
            <InfoField
              gridArea={"languages"}
              label="Speaks"
              value="English/Arabic"
            />

            <InfoField
              gridArea={"university"}
              label="University"
              value="Eastern Mediterranean University (Northern Cyprus) "
            />

            <InfoField
              gridArea={"skills"}
              label="Skills"
              values={[
                "html5",
                "css3",
                "sass",
                "git/github",
                "Javascript",
                "typescript",
                "react",
                "redux",
                "redux-saga",
                "redux-thunk",
                "gatsby",
                "next.js",
                "styled-components",
              ]}
            />
            <InfoField
              gridArea={"learning"}
              label="Learning"
              values={["react-native, vue.js"]}
            />
          </Grid>
        </GridWrapper>
      </Scrollbars>
    </Wrapper>
  )
}

export default About
