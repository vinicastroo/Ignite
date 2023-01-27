import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme["base-profile"]};
  position: relative;
  width: 100%;
  height: 18.5rem;
  z-index: 0;
  @media (max-width:768px) {
    height: 15rem;
  }
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >div{
    display: flex;

    img{
      width: 100%;
      height: auto;
    }

    #logo{
      min-width: 100px;
      max-width: 144px;
      margin-bottom:6rem;
    }
  }
`

export const Circle = styled.div`
  background: #14589C; 
  position: absolute;
  border-radius: 100%;
`

export const FirstCircle = styled(Circle)`
  width: 14.75rem;
  height: 14.75rem;
  left: 0;
  top: 0;
  transform: translate(-50%,-40%);
  filter: blur(14.75rem);
`

export const SecondCircle = styled(Circle)`
  right: 0;
  top: 0;
  width: 9.703rem;
  height: 9.703rem;
  transform: translate(-5%,-35%);
  filter: blur(9.703rem);
`

export const Rectangle = styled.div`
  max-width: 50rem;
  width: 100%;
  height: 3.25rem;
  background: #14589C;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -10%);
  filter: blur(5rem);
`