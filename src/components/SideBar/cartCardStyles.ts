import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  gap: 0.5rem;
  place-items: center;

  padding: 0.5rem 1rem;

  background-color: ${(props) => props.theme.white};
  border-radius: 0.5rem;

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
`;

export const Exit = styled.button`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;

  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  height: 1.25rem;
  width: 1.25rem;

  display: flex;
  place-items: center;
  justify-content: center;

  border-radius: 50%;
  aspect-ratio: 1 / 1;

  cursor: pointer;
`;

export const QtdContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Qtd = styled.span`
  color: ${(props) => props.theme.black};

  font-size: 0.5rem;
`;

export const QtdCounter = styled.div`
  display: flex;
  gap: 0.5rem;

  border: 1px solid ${(props) => props.theme.gray100};
  border-radius: 0.25rem;

  padding: 0.25rem 0.5rem;
`;

export const QtdNumber = styled.span`
  border-left: 1px solid ${(props) => props.theme.gray100};
  border-right: 1px solid ${(props) => props.theme.gray100};
  padding: 0 0.5rem;
`;

export const ProductPrice = styled.span`
  color: ${(props) => props.theme.black};
  font-weight: 700;
`;

export const ChangeQuantity = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
