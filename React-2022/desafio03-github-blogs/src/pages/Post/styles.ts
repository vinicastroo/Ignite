import styled from "styled-components";
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.main`
  max-width: 54rem;
  width: 100%;
  padding: 0 1rem;
  margin-top: -6rem;
  z-index: 1;
`

export const HeaderPost = styled.div`
  padding: 2rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  h1{
    color: ${props => props.theme["base-title"]};
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  
  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    gap: 1rem;
    color: ${props => props.theme["blue"]};
    font-size:  ${props => props.theme["font-12"]};
    font-weight: bold;
  }
`

export const Indicators = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${props => props.theme["base-span"]};
  font-size: ${props => props.theme["font-16"]};
  margin-top: 0.5rem;

  i{
    margin-right: 0.5rem;
  }
`

export const Markdown = styled(ReactMarkdown)`
  padding: 2rem;
  font-size: ${props => props.theme["font-16"]};
  color: ${props => props.theme["base-text"]};

  a{
    color: ${props => props.theme["blue"]};
  }
  p{
    margin-bottom: 0.5rem;
  }
  code {
    background: ${props => props.theme["base-post"]};
    padding: 0.25rem ;
  }
`