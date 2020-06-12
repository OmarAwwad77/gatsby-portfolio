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
  padding: 1rem;
  grid-gap: 0 5rem;
  grid-template-columns: max-content;
  grid-template-areas:
    "img title title"
    "img text text"
    "img name age"
    "img email phone"
    "img education nationality";
`
export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Img = styled.div<{ url: string }>`
  grid-area: img;
  align-self: center;
  width: 35rem;
  min-width: 31rem;
  height: 50rem;
  border-radius: 1rem;
  background: url(${p => p.url}) center/cover no-repeat;
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
    bottom: -0.4rem;
    left: 0%;
    background: ${p => p.theme.colors.secondary};
    width: 10rem;
    height: 0.1rem;
  }
`

// I have ten years experience as a web/interface designer. I have a love of clean, elegant styling, and I have lots of experience in the production of CSS and (X)HTML for modern websites. I have a reasonable grasp of using JavaScript frameworks, specifically jQuery.
