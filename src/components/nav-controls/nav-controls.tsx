import React from "react"
import styled from "styled-components"
import Context from "../context"
import downIcon from "../../assets/arrow-circle-down-solid.svg"
import upIcon from "../../assets/arrow-circle-up-solid.svg"

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 3rem;
  right: 4rem;
`

const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  color: ${p => p.theme.colors.secondary};
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:first-child {
    margin-right: 0.7rem;
  }
`

const NavControls = () => {
  const { navigate } = React.useContext(Context)
  return (
    <Wrapper>
      <Icon onClick={() => navigate({ deltaY: 1 })} as={downIcon} />
      <Icon onClick={() => navigate({ deltaY: -1 })} as={upIcon} />
    </Wrapper>
  )
}

export default NavControls
