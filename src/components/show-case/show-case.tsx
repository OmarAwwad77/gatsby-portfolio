import React, { useState, useCallback, useEffect, useRef } from "react"
import Projects from "../projects/projects"
import { graphql, useStaticQuery } from "gatsby"

import {
  Wrapper,
  Scrollbar,
  ScrollController,
  Line,
  Lines,
} from "./show-case.styles"

interface Props {
  current: boolean
}

const ShowCase: React.FC<Props> = ({ current }) => {
  const [scroll, setScroll] = useState({
    top: 0,
    percentage: 0,
    till: 0,
  })

  const [scale, setScale] = useState(false)

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

  const {
    allContentfulProject: { nodes: projects },
  } = useStaticQuery(graphql`
    {
      allContentfulProject(sort: { fields: count, order: ASC }) {
        nodes {
          id
          count
          name
          stack
          github
          link
          img {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
          }
        }
      }
    }
  `)

  const projectsCount = projects.length
  const projectPercentage = 100 / (projectsCount - 1)
  const breakPoints = Array.from(Array(projectsCount)).map(
    (_, i) => i * projectPercentage
  )

  const onMouseMove = useCallback((e: any) => {
    const element = scrollbarRef.current!
    const pageY = e.pageY ?? e.targetTouches[0].pageY

    const elementHeight = element.offsetHeight
    const maxTop = Math.floor(element.getBoundingClientRect().top)
    const maxBottom = Math.floor(maxTop + elementHeight)

    if (pageY !== 0 && pageY <= maxBottom && pageY >= maxTop) {
      const top = pageY - maxTop
      const percentage = Math.floor((top / elementHeight) * 100)
      const till = Date.now() + 300
      setScroll({ top, percentage, till })
    }
  }, [])

  const onMouseUpOrLeave = () => {
    const scrollbarHeight = scrollbarRef.current?.clientHeight!

    const index = Math.round(scroll.percentage / projectPercentage)
    setScroll(prevState => ({
      ...prevState,
      percentage: breakPoints[index],
      top: (scrollbarHeight * breakPoints[index]) / 100,
    }))
    setScale(false)
    scrollbarRef.current!.removeEventListener("mousemove", onMouseMove)
    scrollbarRef.current!.removeEventListener("touchmove", onMouseMove)
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
        const percentage = Math.max(prevState.percentage - projectPercentage, 0)
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
        const percentage = Math.min(
          prevState.percentage + projectPercentage,
          100
        )
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
      <Lines>
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
        <Line />
        <Line delay={".5s"} />
        <Line delay={"1.5s"} />
      </Lines>
      <Projects
        scale={scale}
        percentage={scroll.percentage}
        projects={projects}
      />
      <Scrollbar
        ref={scrollbarRef}
        onMouseLeave={onMouseUpOrLeave}
        onMouseUp={onMouseUpOrLeave}
        onMouseDown={e => {
          e.preventDefault()
          setScale(true)
          e.currentTarget.addEventListener("mousemove", onMouseMove)
        }}
        onTouchStart={e => {
          setScale(true)
          e.currentTarget.addEventListener("touchmove", onMouseMove)
        }}
        onTouchEnd={onMouseUpOrLeave}
      >
        <ScrollController transition={!scale} style={{ top: scroll.top }}>
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
