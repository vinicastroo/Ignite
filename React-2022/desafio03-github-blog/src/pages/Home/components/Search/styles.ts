import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  margin-top: 4.5rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  input{
    width: 100%;

    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    border: 1px solid  ${props => props.theme["base-border"]};
    padding: 0.75rem 1rem;
    margin-top: 0.75rem;
    border-radius: 6px;
    &::placeholder{
      color: ${props => props.theme["base-label"]};
    }
  }
`