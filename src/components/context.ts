import React, { SetStateAction, Dispatch } from "react"

const Context = React.createContext({
  navigate: (e: { deltaY: number }) => {},
})

export default Context
