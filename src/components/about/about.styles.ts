import styled from "styled-components"
export {
  Section as Wrapper,
  Lines,
  Line,
} from "../../styles/general-components"

export const Grid = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  grid-gap: 2rem 5rem;
  grid-template-areas:
    "img title title"
    "img text text"
    "img name age"
    "img email phone"
    "img education nationality"
    "img university university"
    "skills skills skills"
    "learning learning learning";
`
export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  padding-top: 2rem;
  padding-left: 3rem;
`

export const Img = styled.div<{ url: string }>`
  grid-area: img;
  align-self: center;
  width: 35rem;
  min-width: 31rem;
  height: 50rem;
  border-radius: 1rem;
  background-image: url(${p => p.url});
  background-position: center 0;
  background-size: 55rem;
  background-repeat: no-repeat;
  filter: opacity(0.85);
`

export const Title = styled.h2`
  grid-area: title;
  position: relative;
  color: #fff;
  font-size: 3.2rem;
  line-height: 1.4;
  font-weight: 300;
  text-transform: capitalize;
  span {
    color: ${p => p.theme.colors.secondary};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0%;
    background: ${p => p.theme.colors.secondary};
    width: 10rem;
    height: 0.1rem;
  }
`

export const AboutMe = styled.p`
  grid-area: text;
  padding: 1rem;
  padding-left: 0;
`

// Bsc. Information technology
