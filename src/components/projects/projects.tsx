import React from "react"
import { useSpring } from "react-spring"
import Project, { ProjectType } from "../project/project"
import { Wrapper } from "./projects.styles"

interface Props {
  scale: boolean
  percentage: number
  projects: ProjectType[]
}

const Projects: React.FC<Props> = ({ scale, percentage, projects }) => {
  const maxPercentage = 100 - (1 / projects.length) * 100

  const animStyles = useSpring({
    from: {
      transform: `perspective(100px) translateY(0%) translateZ(0px)`,
    },
    transform: `perspective(100px) translateY(${
      -(maxPercentage * percentage) / 100 + "%"
    }) translateZ(${scale ? -35 : 0}px)`,
  })

  return (
    <Wrapper style={animStyles}>
      {projects.map(project => (
        <Project key={project.count} project={project} />
      ))}
    </Wrapper>
  )
}

export default Projects
