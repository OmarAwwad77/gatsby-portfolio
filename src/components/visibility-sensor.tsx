import React, { useState } from "react"
import Sensor, { Props as SensorProps } from "react-visibility-sensor"

interface Props extends SensorProps {
  once?: boolean
}

const VisibilitySensor = ({
  children,
  onChange,
  once,
  partialVisibility,
}: Props) => {
  const [active, setActive] = useState(true)

  const onVisibilityChange = (isVisible: boolean) => {
    if (!active) return
    onChange?.(isVisible)
    isVisible && once && setActive(false)
  }

  return (
    <Sensor
      partialVisibility={partialVisibility}
      onChange={onVisibilityChange}
      active={active}
    >
      {children}
    </Sensor>
  )
}

export default VisibilitySensor
