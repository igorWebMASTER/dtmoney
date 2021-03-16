import styled from "styled-components";

export const  Container = styled.header`
  background: var(--blue);
`;

export const  Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;


  padding: 2rem 1rem 11rem;
  display: flex;
  align-items:center;
  justify-content:space-between;

  a{
    color:#FFF;
    text-decoration:none;
  }

  button {
    font-size: 1rem;
    border:0;
    color:#FFF;
    background: var(--blue-light);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 200ms;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;