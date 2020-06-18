import styled, { css } from "styled-components"
import { Icon, IconWrapper } from "../../styles/general-components"
import media, { ThemedProps } from "../../styles/media-queries"
export { Icon, IconWrapper }

type WrapperProps = { show?: boolean }
export const Wrapper = styled.ul<WrapperProps>`
  position: fixed;
  z-index: 51;
  top: 50vh;
  right: 4rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  height: 60%;
  width: 4rem; /* for firefox */
  justify-content: center;
  border-radius: 5rem;

  ${media.BREAK_POINT_900PX(css`
    right: ${(p: ThemedProps<WrapperProps>) => (!p.show ? "-50%" : "50%")};
    transform: translate(50%, -50%);

    align-items: center;
    justify-content: space-around;
  `)}
`

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;

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

  &:not(:first-child) {
    margin-top: 2rem;
  }

  &:hover,
  &:active {
    ${IconWrapper}::after {
      background: ${p => p.theme.colors.secondary};
    }
    ${Icon} {
      color: #fff;
    }
    span {
      display: block;
      color: #fff;
    }
  }

  ${media.BREAK_POINT_900PX(css`
    ${IconWrapper}::after {
      background: ${p => p.theme.colors.secondary};
    }
    span {
      color: #000;
      display: block;
    }
  `)}
`
