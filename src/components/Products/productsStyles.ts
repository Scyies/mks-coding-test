import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;

  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

export const CardContainer = styled.div`
  position: relative;

  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  padding: 0.75rem;
  padding-bottom: 3rem;
`;

export const ProductNameContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  place-items: center;
`;

export const ProductName = styled.span`
  font-weight: 400;
`;

export const ProductPrice = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.gray700};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
`;

export const ProductDescription = styled.p`
  color: ${(props) => props.theme.gray900};
  font-weight: 300;
  font-size: 0.625rem;
`;

export const ProductButton = styled.button`
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 0 0 0.5rem 0.5rem;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 0.5rem;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  place-items: center;

  font-weight: 600;

  cursor: pointer;
`;
