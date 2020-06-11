import React from "react"
import styled from "styled-components"
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

const Icon = styled(homeIcon)`
  position: relative;
  z-index: 1;
  color: ${p => p.theme.colors.main};
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
`

const IconWrapper = styled.div<{ label: string }>`
  background: ${p => p.theme.colors.secondary};
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  padding: 1rem;
  cursor: pointer;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 5rem;
    position: absolute;
    top: 0;
    right: 0%;
    background: transparent;
    transition: all 0.3s ease-out;
  }
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
        <IconWrapper label="Home">
          <Icon as={homeIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem>
        <span>About</span>
        <IconWrapper label="About">
          <Icon as={userIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem>
        <span>Portfolio</span>
        <IconWrapper label="Portfolio">
          <Icon as={portfolioIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem>
        <span>GitHub</span>
        <IconWrapper label="Portfolio">
          <Icon as={githubIcon} />
        </IconWrapper>
      </NavItem>
    </Wrapper>
  )
}

export default Nav
