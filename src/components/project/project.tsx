import React from "react"
import githubIcon from "../../assets/github.svg"
import linkIcon from "../../assets/external-link.svg"
import {
  Wrapper,
  Content,
  ProjectImg,
  ProjectInfoWrapper,
  ProjectInfo,
  Count,
  Name,
  Description,
  Stack,
  Tag,
  Links,
  Icon,
  IconWrapper,
} from "./project.styles"

interface Props {
  url: string
}
const Project: React.FC<Props> = ({ url }) => {
  return (
    <Wrapper>
      <Content>
        <ProjectImg url={url} />

        <ProjectInfoWrapper>
          <ProjectInfo>
            <Count>01.</Count>
            <Name>Traveler's Map</Name>
            <Description>
              Traveler's map is an online community where travelers from around
              the globe can share beautiful destinations they have visited,
              follow fellow travelers and exchange information, all using an
              interactive online map.
            </Description>
            <Stack>
              {[
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
            </Stack>
            <Links>
              <IconWrapper>
                <Icon as={githubIcon} />
              </IconWrapper>
              <IconWrapper>
                <Icon as={linkIcon} />
              </IconWrapper>
            </Links>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </Content>
    </Wrapper>
  )
}

export default Project
