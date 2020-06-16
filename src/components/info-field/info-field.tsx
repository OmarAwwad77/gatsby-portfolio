import React from "react"
import styled, { css } from "styled-components"

export const Wrapper = styled.div<{ gridArea?: string; center: boolean }>`
  min-width: 20rem;
  max-width: 60rem;
  border: 1px solid #69696930;
  display: flex;
  grid-area: ${p => p.gridArea};
  justify-self: ${p => p.center && "center"};
`

const label_value_styles = css`
  font-size: 1.3rem;
  border: 1px solid #69696930;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const Label = styled.span`
  ${label_value_styles}
  flex-grow: 1;
  background: ${p => p.theme.colors.main};
`

export const Value = styled.span`
  ${label_value_styles}
  flex-grow: 3;
  color: #fff;
  background: ${p => p.theme.colors.background};
  display: flex;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  /* text-transform: capitalize; */
  font-size: 1.3rem;
  color: #000;
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  background: ${p => p.theme.colors.secondary};
  border-radius: 0.5rem;
  font-weight: 600;
`

interface Props {
  label: string
  value?: string
  values?: string[]
  gridArea?: string
}

const InfoField: React.FC<Props> = ({ value, values, label, gridArea }) => {
  return (
    <Wrapper center={!!values} gridArea={gridArea}>
      <Label>{label}</Label>

      <Value>{value ?? values?.map(val => <Tag key={val}>{val}</Tag>)}</Value>
    </Wrapper>
  )
}

export default InfoField
