import styled from "styled-components"
import { Section, Line, Lines } from "../../styles/general-components"
export { Line, Lines }

export const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const H1 = styled.h1`
  font-size: 5.2rem;
  color: #fff;
  text-transform: capitalize;
  text-align: center;
  line-height: 1.4;

  span {
    background: linear-gradient(
      to left,
      ${p => p.theme.colors.secondary},
      transparent
    );
    border-radius: 5px;
    padding-right: 1rem;
  }
`

export const P = styled.p`
  text-transform: capitalize;
  background: #000;
`

export const PortfolioButton = styled.a`
  position: relative;
  text-transform: uppercase;
  color: #fff;
  background: #272829;
  padding: 1rem 3rem;
  border-radius: 5px;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;

  &:hover::after {
    /* border-radius: 5px;
    width: 100%;
    height: 100%; */
    right: 10%;
    width: 80%;
  }
  span {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 60%;
    background: ${p => p.theme.colors.secondary};
    border-radius: 6rem 0rem;
    transition: all 0.2s ease-out;
  }
`

// https://images.unsplash.com/photo-1586303869386-31bdb5c1a334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80

// https://images.unsplash.com/photo-1591026433494-540fb0f481f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80
