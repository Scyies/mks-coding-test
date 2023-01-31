import styled from 'styled-components';

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  position: fixed;
  height: 100vh;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;

  width: 450px;
  padding: 2rem 2rem 0 2rem;

  background-color: ${(props) => props.theme.blue};

  animation: 500ms ease;
  animation-name: translateIn;

  @keyframes translateIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const HeadingText = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.75rem;
`;

export const Exit = styled.button`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  text-size: 1.75rem;

  height: 2.5rem;
  width: 2.5rem;

  display: flex;
  place-items: center;
  justify-content: center;

  border-radius: 50%;
  aspect-ratio: 1 / 1;

  cursor: pointer;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.75rem;

  margin-left: -2rem;
  margin-right: -2rem;
  padding: 2rem 0;

  border: none;

  cursor: pointer;
`;

export const ProductsSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;

  margin-top: 1rem;
`;
