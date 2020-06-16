import styled from "styled-components"
export { Tag } from "../info-field/info-field"
export { Icon, IconWrapper } from "../../styles/general-components"

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${p => p.theme.layoutPadding * 2 + "rem"});
  display: flex;
  align-items: center;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`

export const Content = styled.div`
  position: relative;
  height: 43rem;
  width: 90rem;
  transition: all 0.2s ease-out;
  &:hover > div:not(:hover) {
    transform: scale(0.9);
    z-index: 0;
  }
`

export const ProjectImg = styled.div<{ url: string }>`
  position: relative;
  z-index: 1;
  width: 66.6%;
  height: 100%;
  background: url(${p => p.url}) center/cover no-repeat;
  box-shadow: 10px 7px 20px 3px #000;
  border-radius: 1rem;
  transition: all 0.2s ease-out;
`

// const getBeforeAfterHeight = (parentHeight: )

export const ProjectInfoWrapper = styled.div`
  position: relative;
  z-index: 1;
  left: 30%;
  top: -100%;
  width: 66.6%;
  height: 100%;
  transition: all 0.2s ease-out;
`

export const ProjectInfo = styled.div`
  position: relative;
  top: 10%;
  height: 80%;
  width: 100%;
  background: ${p => p.theme.colors.background};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Count = styled.span`
  color: ${p => p.theme.colors.secondary};
`

export const Name = styled.span`
  font-size: 2rem;
  color: ${p => p.theme.colors.secondary};
`

export const Description = styled.span``

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Links = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 2rem;
  }
`

/*
  200px
  3:2 = 5
  200/5 = 40
  3 * 40 = 120
  2 * 40 = 80

  80/120*100 = 66.6

*/

/*
  200px
  16:9 = 25
  200/25 = 8
  16 * 8 = 128
  9 * 8 = 72

  72/128*100 = 56.25

*/
