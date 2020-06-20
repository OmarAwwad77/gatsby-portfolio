import React, { useRef, useState } from "react"
import { useTheme } from "styled-components"
import { useChain, useSpring, ReactSpringHook } from "react-spring"
import VisibilitySensor from "../visibility-sensor"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import {
  Wrapper,
  Grid,
  Img,
  ImgWrapper,
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

interface AboutData {
  email: string
  name: string
  age: string
  phone: string
  education: string
  speaks: string
  university: string
  skills: string[]
  learning: string[]
  aboutMe: string
}

interface AboutQuery {
  site: {
    aboutData: AboutData
  }
  mePng: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const About: React.FC<Props> = ({ current }) => {
  const { colors } = useTheme()
  const {
    mePng: {
      childImageSharp: { fluid },
    },
    site: { aboutData },
  } = useStaticQuery<AboutQuery>(graphql`
    {
      mePng: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        aboutData: siteMetadata {
          email
          name
          age
          phone
          education
          speaks
          university
          skills
          learning
          aboutMe
        }
      }
    }
  `)

  const [visible, setVisible] = useState(false)

  const rightSpringRef = useRef<ReactSpringHook>(null)
  const leftSpringRef = useRef<ReactSpringHook>(null)
  const bottomSpringRef = useRef<ReactSpringHook>(null)
  const topSpringRef = useRef<ReactSpringHook>(null)

  const rightAnimProps = useSpring({
    from: { transform: `translateX(100vw)` },
    transform: visible ? `translateX(0vw)` : `translateX(100vw)`,
    ref: rightSpringRef,
  })

  const leftAnimProps = useSpring({
    from: {
      transform: `translateX(-100vw)`,
    },
    transform: visible ? `translateX(0vw)` : `translateX(-100vw)`,
    ref: leftSpringRef,
  })

  const topAnimProps = useSpring({
    from: {
      transform: `translateY(-100vh)`,
    },
    transform: visible ? `translateY(0vh)` : `translateY(-100vh)`,
    ref: topSpringRef,
  })

  const bottomAnimProps = useSpring({
    from: {
      transform: `translateY(100vh)`,
    },
    transform: visible ? `translateY(0vh)` : `translateY(100vh)`,
    ref: bottomSpringRef,
  })

  useChain(
    visible
      ? [topSpringRef, leftSpringRef, rightSpringRef, bottomSpringRef]
      : []
  )

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
        <VisibilitySensor
          once
          partialVisibility
          onChange={isVisible => {
            setVisible(isVisible)
          }}
        >
          <GridWrapper>
            <Grid>
              <ImgWrapper style={leftAnimProps}>
                <Img fluid={fluid} />
              </ImgWrapper>

              <Title style={topAnimProps}>
                Hello!, I'm <span>Omar Awwad</span>
                <br /> Javascript/React Enthusiast
              </Title>
              <AboutMe style={rightAnimProps}>{aboutData.aboutMe}</AboutMe>
              <InfoField
                animProps={rightAnimProps}
                gridArea={"name"}
                label="Name"
                value={aboutData.name}
              />
              <InfoField
                animProps={rightAnimProps}
                gridArea={"age"}
                label="Age"
                value={aboutData.age}
              />
              <InfoField
                animProps={rightAnimProps}
                gridArea={"email"}
                label="Email"
                value={aboutData.email}
              />
              <InfoField
                animProps={rightAnimProps}
                gridArea={"phone"}
                label="Phone"
                value={aboutData.phone}
              />
              <InfoField
                animProps={rightAnimProps}
                gridArea={"education"}
                label="Education"
                value={aboutData.education}
              />
              <InfoField
                animProps={rightAnimProps}
                gridArea={"languages"}
                label="Speaks"
                value={aboutData.speaks}
              />

              <InfoField
                animProps={rightAnimProps}
                gridArea={"university"}
                label="University"
                value={aboutData.university}
              />

              <InfoField
                animProps={bottomAnimProps}
                gridArea={"skills"}
                label="Skills"
                values={aboutData.skills}
              />
              <InfoField
                animProps={bottomAnimProps}
                gridArea={"learning"}
                label="Learning"
                values={aboutData.learning}
              />
            </Grid>
          </GridWrapper>
        </VisibilitySensor>
      </Scrollbars>
    </Wrapper>
  )
}

export default About
