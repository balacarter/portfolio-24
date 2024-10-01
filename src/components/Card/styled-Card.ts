import { styled } from '@linaria/react';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: var(--primary-color);

  h1,
  h2 {
    margin: 0;
  }
`;
