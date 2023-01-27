import styled from "styled-components";

export const PostContainer = styled.a`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme["base-post"]};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  
  > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    strong{
      color: ${props => props.theme["base-title"]};
      font-size: 1.25rem;
      flex: 1;
    }
    
    span{
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
      white-space: nowrap;
    }
  }

  p{
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100px;
    margin-top: 1.25rem;
    color: ${props => props.theme["base-text"]};
  }

  &:hover{
    border-color: ${props => props.theme["base-text"]};
    transition: border-color 0.2s;
  }
`