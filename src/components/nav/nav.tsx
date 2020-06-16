import React from "react"
import styled from "styled-components"
import { Icon, IconWrapper } from "../../styles/general-components"
import homeIcon from "../../assets/home-solid.svg"
import userIcon from "../../assets/user-solid.svg"
import portfolioIcon from "../../assets/briefcase-solid.svg"
import githubIcon from "../../assets/github.svg"

const Wrapper = styled.ul`
  position: fixed;
  z-index: 2;
  top: 50vh;
  right: 4rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  &:hover {
    width: auto;
    ${IconWrapper}::after {
      width: 100%;
      right: 0%;
      background: ${p => p.theme.colors.secondary};
    }
    ${Icon} {
      color: #fff;
    }
    span {
      display: block;
    }
  }

  span {
    display: none;
    position: relative;
    z-index: 1;
    color: #fff;
    font-weight: 600;
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`

const Nav = () => {
  return (
    <Wrapper>
      <NavItem>
        <span>Home</span>
        <IconWrapper nav>
          <Icon as={homeIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem>
        <span>About</span>
        <IconWrapper nav>
          <Icon as={userIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem>
        <span>Portfolio</span>
        <IconWrapper nav>
          <Icon as={portfolioIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem>
        <span>GitHub</span>
        <IconWrapper nav>
          <Icon as={githubIcon} />
        </IconWrapper>
      </NavItem>
    </Wrapper>
  )
}

export default Nav
