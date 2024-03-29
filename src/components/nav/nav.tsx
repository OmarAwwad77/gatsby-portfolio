import React, { useContext } from "react"
import Context from "../context"

import homeIcon from "../../assets/home-solid.svg"
import userIcon from "../../assets/user-solid.svg"
import portfolioIcon from "../../assets/briefcase-solid.svg"
import githubIcon from "../../assets/github.svg"
import resumeIcon from "../../assets/file-solid.svg"

import { Icon, IconWrapper, NavItem, Wrapper } from "./nav.styles"

const Nav: React.FC<{ show?: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  const { navigate } = useContext(Context)

  return (
    <Wrapper onClick={onClick} show={show}>
      <NavItem onClick={() => navigate({ navConfig: { index: 0, y: 0 } })}>
        <span>Home</span>
        <IconWrapper nav>
          <Icon as={homeIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem onClick={() => navigate({ navConfig: { index: 1, y: -100 } })}>
        <span>About</span>
        <IconWrapper nav>
          <Icon as={userIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem onClick={() => navigate({ navConfig: { index: 2, y: -200 } })}>
        <span>Portfolio</span>
        <IconWrapper nav>
          <Icon as={portfolioIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem as="a" href="https://github.com/OmarAwwad77" target="_blank">
        <span>GitHub</span>
        <IconWrapper nav>
          <Icon as={githubIcon} />
        </IconWrapper>
      </NavItem>

      <NavItem as="a" href="../../Resume.docx" target="_blank">
        <span>Resume</span>
        <IconWrapper nav>
          <Icon as={resumeIcon} />
        </IconWrapper>
      </NavItem>
    </Wrapper>
  )
}

export default Nav
