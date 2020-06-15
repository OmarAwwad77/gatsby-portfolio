import React, { useState, useCallback } from "react"
import { animated, useSpring } from "react-spring"
import {
  Wrapper,
  Scrollbar,
  Projects,
  Project,
  ScrollController,
} from "./show-case.styles"

interface Props {
  current: boolean
}

const projectsCount = 5
const projectPercentage = 100 / (projectsCount - 1)
const breakPoints = Array.from(Array(projectsCount)).map(
  (_, i) => i * projectPercentage
)
const maxPercentage = 100 - (1 / projectsCount) * 100

const ShowCase: React.FC<Props> = ({ current }) => {
  const [scroll, setScroll] = useState({
    top: 0,
    percentage: 0,
    till: 0,
  })

  const [projects, setProjects] = useState({
    scale: false,
  })

  const animStyles = useSpring({
    from: { transform: `perspective(100px) translateY(0%) translateZ(0px) ` },
    transform: `perspective(100px) translateY(${
      -(maxPercentage * scroll.percentage) / 100 + "%"
    }) translateZ(${projects.scale ? -35 : 0}px)`,
  })

  const onMouseMove = useCallback((e: any) => {
    const element = e.currentTarget as HTMLElement
    const elementHeight = element.offsetHeight
    const maxTop = Math.floor(element.getBoundingClientRect().top)
    const maxBottom = Math.floor(maxTop + elementHeight)

    if (e.pageY !== 0 && e.pageY <= maxBottom && e.pageY >= maxTop) {
      const top = e.pageY - maxTop
      const percentage = Math.floor((top / elementHeight) * 100)
      const till = Date.now() + 2000
      setScroll({ top, percentage, till })
    }
  }, [])

  const onMouseUpOrLeave = (e: React.MouseEvent) => {
    const elementHeight = (e.currentTarget as HTMLElement).offsetHeight

    const index = Math.round(scroll.percentage / projectPercentage)
    setScroll(prevState => ({
      ...prevState,
      percentage: breakPoints[index],
      top: (elementHeight * breakPoints[index]) / 100,
    }))
    setProjects({ scale: false })
    e.currentTarget.removeEventListener("mousemove", onMouseMove)
  }

  return (
    <Wrapper current={current}>
      <Projects style={animStyles}>
        <Project>
          <span>1</span>
        </Project>
        <Project>
          <span>2</span>
        </Project>
        <Project>
          <span>3</span>
        </Project>
        <Project>
          <span>4</span>
        </Project>
        <Project>
          <span>5</span>
        </Project>
      </Projects>
      <Scrollbar
        onMouseLeave={onMouseUpOrLeave}
        onMouseUp={onMouseUpOrLeave}
        onMouseDown={e => {
          e.preventDefault()
          setProjects({ scale: true })
          e.currentTarget.addEventListener("mousemove", onMouseMove)
        }}
      >
        <ScrollController style={{ top: scroll.top }}>
          <span className="project-number">
            {Math.round(scroll.percentage / projectPercentage) + 1}
          </span>
          <span className="division">/</span>
          <span className="projects-total">{projectsCount}</span>
        </ScrollController>
      </Scrollbar>
    </Wrapper>
  )
}

export default ShowCase
