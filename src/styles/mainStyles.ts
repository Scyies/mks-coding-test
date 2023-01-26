import styled from 'styled-components';

export const Main = styled.main`
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.theme.backgroundWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
