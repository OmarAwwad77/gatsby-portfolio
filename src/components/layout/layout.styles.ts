import styled, { css } from "styled-components"
import { animated } from "react-spring"
import menuIcon from "../../assets/bars-solid.svg"
import media from "../../styles/media-queries"

export const Wrapper = styled.div<{ y?: string }>`
  position: relative;
  padding: ${p => p.theme.layoutPadding + "rem"};
  transition: all 0.5s ease-out;
  transform: translateY(${p => p.y ?? 0});
  & > *:not(:first-child) {
    margin-top: ${p => p.theme.layoutPadding * 2 + "rem"};
  }
`

export const MenuIconWrapper = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  z-index: 51;
  background: ${p => p.theme.colors.secondary};
  color: #000;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    color: #fff;
  }

  ${media.BREAK_POINT_900PX(css`
    display: flex;
  `)}
`

export const OverLay = styled(animated.div)`
  position: absolute;
  z-index: 50;

  top: 0%;
  right: 0%;
  background: ${p => p.theme.colors.main};
  border-radius: 5rem;
`
// transform: scale(40.5);
// transform - origin: 73 % 16 %;

export const MenuIcon = styled(menuIcon)`
  width: 100%;
  height: 100%;
  z-index: 51;
`
