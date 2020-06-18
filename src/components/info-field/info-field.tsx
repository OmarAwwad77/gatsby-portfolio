import React from "react"
import { AnimatedValue } from "react-spring"
import { Wrapper, Label, Value, Tag } from "./info-field.styles"

interface Props {
  label: string
  value?: string
  values?: string[]
  gridArea?: string
  className?: string
  animProps?: AnimatedValue<any>
}

const InfoField: React.FC<Props> = ({
  value,
  values,
  label,
  gridArea,
  className,
  animProps,
}) => {
  return (
    <Wrapper
      style={animProps}
      className={className}
      center={values ? 1 : 0}
      area={gridArea}
    >
      <Label>{label}</Label>

      <Value>{value ?? values?.map(val => <Tag key={val}>{val}</Tag>)}</Value>
    </Wrapper>
  )
}

export default InfoField
