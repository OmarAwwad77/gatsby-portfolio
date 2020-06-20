import React from "react"
import { AnimatedValue } from "react-spring"
import {
  Count,
  Description,
  Links,
  Stack,
  Wrapper,
  Name,
  Icon,
  IconWrapper,
  Tag,
} from "./project-info.styles"
import githubIcon from "../../../assets/github.svg"
import linkIcon from "../../../assets/external-link.svg"

interface Props {
  style: AnimatedValue<any>
  count: string
  name: string
  description: string
  stack: string[]
  github: string
  link: string
}

const ProjectInfo: React.FC<Props> = ({
  style,
  count,
  name,
  description,
  stack,
  github,
  link,
}) => {
  return (
    <Wrapper style={style}>
      <Count>{count}</Count>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Stack>
        {stack.map(val => (
          <Tag key={val}>{val}</Tag>
        ))}
      </Stack>
      <Links>
        <IconWrapper as="a" href={github} target="blank">
          <Icon as={githubIcon} />
        </IconWrapper>
        <IconWrapper as="a" href={link} target="blank">
          <Icon as={linkIcon} />
        </IconWrapper>
      </Links>
    </Wrapper>
  )
}

export default ProjectInfo
