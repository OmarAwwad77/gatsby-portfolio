import React, { useState, useCallback, useEffect, useRef } from "react"
import { useSpring } from "react-spring"
import Project from "../project/project"

import {
  Wrapper,
  Scrollbar,
  Projects,
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

  const wrapperRef = useRef<HTMLElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    wrapperRef.current?.addEventListener("wheel", onWheelHandler, {
      passive: false,
    })
    return () => {
      wrapperRef.current?.removeEventListener("wheel", onWheelHandler)
    }
  }, [scroll.percentage])

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
      const till = Date.now() + 300
      setScroll({ top, percentage, till })
    }
  }, [])

  const onMouseUpOrLeave = (e: React.MouseEvent) => {
    const scrollbarHeight = scrollbarRef.current?.clientHeight!

    const index = Math.round(scroll.percentage / projectPercentage)
    setScroll(prevState => ({
      ...prevState,
      percentage: breakPoints[index],
      top: (scrollbarHeight * breakPoints[index]) / 100,
    }))
    setProjects({ scale: false })
    e.currentTarget.removeEventListener("mousemove", onMouseMove)
  }

  const onWheelHandler = (e: WheelEvent) => {
    e.preventDefault()
    const now = Date.now()
    if (scroll.till > now) {
      e.stopPropagation()
      return
    }
    const deltaY = e.deltaY
    const scrollDir: "bottom" | "top" = deltaY > 0 ? "bottom" : "top"
    const scrollbarHeight = scrollbarRef.current?.clientHeight!

    if (scrollDir === "top" && scroll.percentage !== 0) {
      e.stopPropagation()
      setScroll(prevState => {
        const percentage = prevState.percentage - projectPercentage
        return {
          ...prevState,
          percentage,
          top: (scrollbarHeight * percentage) / 100,
          till: Date.now() + 300,
        }
      })
    } else if (scrollDir === "bottom" && scroll.percentage !== 100) {
      e.stopPropagation()
      setScroll(prevState => {
        const percentage = prevState.percentage + projectPercentage
        return {
          ...prevState,
          percentage,
          top: (scrollbarHeight * percentage) / 100,
          till: Date.now() + 300,
        }
      })
    }
  }

  return (
    <Wrapper ref={wrapperRef} current={current}>
      <Projects style={animStyles}>
        <Project
          url={
            "https://firebasestorage.googleapis.com/v0/b/connect-c44e6.appspot.com/o/images%2F1591353475621?alt=media&token=d086a12e-9d92-4b08-9e4b-a7ab924dba54"
          }
        />
        {/* <Project>
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
        </Project> */}
      </Projects>
      <Scrollbar
        ref={scrollbarRef}
        onMouseLeave={onMouseUpOrLeave}
        onMouseUp={onMouseUpOrLeave}
        onMouseDown={e => {
          e.preventDefault()
          setProjects({ scale: true })
          e.currentTarget.addEventListener("mousemove", onMouseMove)
        }}
      >
        <ScrollController
          transition={!projects.scale}
          style={{ top: scroll.top }}
        >
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
