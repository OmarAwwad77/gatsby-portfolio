import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import About from "../components/about/about"

const Wrapper = styled.div``
const elements = [Hero, About]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<{
    index: number
    y: number
    dir?: "top" | "bottom"
  }>({ index: 0, y: 0 })

  const waitTill = useRef<number>(0)
  useEffect(() => {
    document.addEventListener("wheel", onWheelHandler)
    return () => document.removeEventListener("wheel", onWheelHandler)
  }, [currentIndex])

  const onWheelHandler = (e: WheelEvent) => {
    if (waitTill.current > Date.now()) return
    waitTill.current = Date.now() + 400
    if (e.deltaY > 0 && currentIndex.index === elements.length - 1) return
    if (e.deltaY < 0 && currentIndex.index === 0) return
    setCurrentIndex(({ index, dir, y }) => {
      const newIndex = e.deltaY > 0 ? index + 1 : index - 1
      const newDir = index > newIndex ? "top" : "bottom"
      return {
        index: newIndex,
        y: newDir === "top" ? y + 100 : newDir === "bottom" ? y - 100 : 0,
        dir: newDir,
      }
    })
  }

  const { index, dir, y } = currentIndex

  return (
    <Wrapper>
      <Layout y={`${y}vh`}>
        {elements.map((El, i) => (
          <El current={i === index} key={i} />
        ))}
      </Layout>
    </Wrapper>
  )
}

// const Wrapper = styled.div``
// const elements = [Hero, About]

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState<{
//     index: number
//     prevIndex: number
//     dir?: "top" | "bottom"
//   }>({ index: 0, prevIndex: -1 })

//   useEffect(() => {
//     document.addEventListener("wheel", onWheelHandler)
//     return () => document.removeEventListener("wheel", onWheelHandler)
//   }, [currentIndex])

//   const onWheelHandler = (e: WheelEvent) => {
//     if (e.deltaY > 0 && currentIndex.index === elements.length - 1) return
//     if (e.deltaY < 0 && currentIndex.index === 0) return
//     setCurrentIndex(({ index, dir }) => {
//       const newIndex = e.deltaY > 0 ? index + 1 : index - 1
//       return {
//         index: newIndex,
//         prevIndex: index,
//         dir: index > newIndex ? "top" : "bottom",
//       }
//     })
//   }

//   const { index, dir, prevIndex } = currentIndex

//   return (
//     <Wrapper>
//       <Layout>
//         {elements.map((El, i) => (
//           <El
//             key={i}
//             anim={i === index ? "enter" : i === prevIndex ? "leave" : undefined}
//             dir={
//               i === index
//                 ? dir
//                 : i === prevIndex
//                 ? dir === "bottom"
//                   ? "top"
//                   : "bottom"
//                 : undefined
//             }
//           />
//         ))}
//       </Layout>
//     </Wrapper>
//   )
// }
