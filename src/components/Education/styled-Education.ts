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
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    width: 130%;
    opacity: 30%;
    top: -40px;
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
`;

export const StyledCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 60px;
  gap: 100px;
  justify-content: center;

  ${StyledCard} {
    border: 1px solid var(--secondary-color);
    flex-basis: 40%;
    background: none;

    &:nth-of-type(2n) {
      text-align: end;
    }

    h2 span {
      font-size: 18px;
      line-height: 22px;
      font-weight: 200;
    }
  }
`;
