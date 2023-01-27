import styled from "styled-components";


export const ProfileContainer = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  
  > div{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 2rem;

    p {
      margin-top: 0.5rem;
      color: ${props => props.theme["base-text"]};
    }

    > div{
      display: flex;
      gap: 1.5rem;
      align-items: center;

      a{
        text-decoration: none;
        color: ${props => props.theme.blue};
        text-transform: uppercase;
        font-size:0.75rem;
        border: 1px solid transparent;
        line-height: 0;
        display: flex;
        align-items: center;
        
        i{
          margin-left: 0.5rem;
        }
      }

      a:hover{
        border-bottom-color: ${props => props.theme.blue};;
      }
    }
    
    >div:first-child{
      justify-content: space-between;

      strong{
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
      }
    }

    >div:last-child{
      margin-top: 1.5rem;
      font-size: 1rem;
      display: flex;
      align-items: center;
      span{ 
        color: ${props => props.theme["base-subtitle"]};
      }

      i{
        color: ${props => props.theme["base-label"]};
        margin-right: 0.5rem;
      }
    }
  }

  p{
    display: block;
  }

  img{
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 8px;
  }
`