import { styled } from '@linaria/react';
import { StyledCard } from '../Card/styled-Card';

export const StyledEducationPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: var(--secondary-color);
  min-height: 100vh;
  background-color: var(--primary-color);
  align-items: center;
`;

export const StyledTitle = styled.h1`
  margin: 0;
`;

export const StyledCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;

  ${StyledCard} {
    border: 1px solid var(--secondary-color);
    flex-basis: 40%;

    h2 span {
      font-size: 18px;
      line-height: 22px;
      font-weight: 200;
    }

    svg {
      height: 100px;
    }
  }
`;
