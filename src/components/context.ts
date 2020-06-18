import React from "react"
import { OnWheelHandler } from "../pages/index"

const Context = React.createContext({
  navigate: (args: OnWheelHandler) => {},
})

export default Context
