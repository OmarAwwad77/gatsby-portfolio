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
  ProjectImgWrapper,
  ProjectInfoWrapper,
  ProjectImgOverlay,
  Stack,
  Links,
} from "./project.styles"
import { FluidObject } from "gatsby-image"

import { Count, Name, Tag } from "./project-info/project-info.styles"

export interface ProjectType {
  count: string
  name: string
  description: { description: string }
  stack: string[]
  github: string
  link: string
  img: {
    fluid: FluidObject
  }
}

const Project: React.FC<{ project: ProjectType }> = ({
  project: { count, name, description, stack, github, link, img },
}) => {
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
          <ProjectImgWrapper style={imgAnimProps}>
            <ProjectImg Tag="div" fluid={img.fluid}>
              <ProjectImgOverlay>
                <div className="name-count">
                  <Count>{count}</Count>
                  <br />
                  <Name>{name}</Name>
                </div>
                <span className="description">
                  <span className="text">{description.description}</span>
                  <div className="stack">
                    {stack.map(val => (
                      <Tag key={val}>{val}</Tag>
                    ))}
                  </div>
                </span>
                <Links>
                  <IconWrapper as="a" href={github} target="blank">
                    <Icon as={githubIcon} />
                  </IconWrapper>
                  <IconWrapper as="a" href={link} target="blank">
                    <Icon as={linkIcon} />
                  </IconWrapper>
                </Links>
              </ProjectImgOverlay>
            </ProjectImg>
          </ProjectImgWrapper>
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
              count={count}
              name={name}
              description={description.description}
              stack={stack}
              github={github}
              link={link}
            />
          </ProjectInfoWrapper>
        </Content>
      </VisibilitySensor>
    </Wrapper>
  )
}

export default Project
