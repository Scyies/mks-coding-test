import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${(props) => props.theme.blue};
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme.white};
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
  place-items: center;
  color: ${(props) => props.theme.black};
  font-weight: bold;
  border: none;
  padding: 0.5rem 1rem;
`;

export const MKSLogo = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 2.5rem;
  align-self: flex-end;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 300;
  font-size: 1.25rem;
  align-self: flex-end;
`;
