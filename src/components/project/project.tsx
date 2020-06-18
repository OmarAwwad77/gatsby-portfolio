import React, { useRef, useState } from "react"

import { useSpring, useChain, ReactSpringHook } from "react-spring"
import ProjectInfo from "./project-info/project-info"
import { Icon, IconWrapper } from "../../styles/general-components"
import githubIcon from "../../assets/github.svg"
import linkIcon from "../../assets/external-link.svg"
import VisibilitySensor from "../visibility-sensor"

import {
  Wrapper,
  Content,
  ProjectImg,
  ProjectInfoWrapper,
  ProjectImgOverlay,
  Stack,
  Links,
} from "./project.styles"

import { Count, Name, Tag } from "./project-info/project-info.styles"

interface Props {
  url: string
}

const Project: React.FC<Props> = ({ url }) => {
  const [visible, setVisible] = useState(false)

  const imgSpringRef = useRef<ReactSpringHook>(null)
  const infoSpringRef = useRef<ReactSpringHook>(null)

  const imgAnimProps = useSpring({
    from: {
      transform: `translateX(-90vw)`,
    },
    transform: visible ? `translateX(0vw)` : `translateX(-90vw)`,
    ref: imgSpringRef,
  })

  const infoAnimProps = useSpring({
    from: {
      transform: `translateX(90vw)`,
    },
    transform: visible ? `translateX(0vw)` : `translateX(90vw)`,
    ref: infoSpringRef,
  })

  useChain(visible ? [imgSpringRef, infoSpringRef] : [], [0, 1])

  return (
    <Wrapper>
      <VisibilitySensor
        once
        partialVisibility
        onChange={isVisible => setVisible(isVisible)}
      >
        <Content>
          <ProjectImg style={imgAnimProps} url={url}>
            <ProjectImgOverlay>
              <div>
                <Count>01.</Count>
                <br />
                <Name>Traveler's Map</Name>
              </div>
              <span className="description">
                <span className="text">
                  Traveler's map is an online community where travelers from
                  around the globe can share beautiful destinations they have
                  visited, follow fellow travelers and exchange information, all
                  using an interactive online map.
                </span>
                <div className="stack">
                  {[
                    "typescript",
                    "react",
                    "redux",
                    "redux-saga",
                    "react-router",
                    "react-leaflet",
                    "leaflet-draw",
                    "styled-components",
                    "firebase",
                  ].map(val => (
                    <Tag key={val}>{val}</Tag>
                  ))}
                </div>
              </span>
              <Links>
                <IconWrapper as="a" href={""} target="blank">
                  <Icon as={githubIcon} />
                </IconWrapper>
                <IconWrapper>
                  <Icon as={linkIcon} />
                </IconWrapper>
              </Links>
            </ProjectImgOverlay>
          </ProjectImg>
          <Stack
            animProps={infoAnimProps}
            label="Stack"
            values={[
              "typescript",
              "react",
              "redux",
              "redux-saga",
              "react-router",
              "react-leaflet",
              "leaflet-draw",
              "styled-components",
              "firebase",
            ]}
          />
          <ProjectInfoWrapper>
            <ProjectInfo
              style={infoAnimProps}
              count="01."
              name="Traveler's Map"
              description="Traveler's map is an online community where travelers from around
            the globe can share beautiful destinations they have visited,
            follow fellow travelers and exchange information, all using an
            interactive online map."
              stack={[
                "typescript",
                "react",
                "redux",
                "redux-saga",
                "react-router",
                "react-leaflet",
                "leaflet-draw",
                "styled-components",
                "firebase",
              ]}
              githubUrl="http://www.google.com"
              link=""
            />
          </ProjectInfoWrapper>
        </Content>
      </VisibilitySensor>
    </Wrapper>
  )
}

export default Project
