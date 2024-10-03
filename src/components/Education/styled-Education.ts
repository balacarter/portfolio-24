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
  gap: 128px;
  position: relative;
  overflow: hidden;
  z-index: 2;

  > h1 {
    margin-top: 64px;
  }

  > svg {
    position: absolute;
    width: 200vw;
    opacity: 60%;
    top: -1vw;
    z-index: 1;
  }

  @media (width >= 992px) {
    > svg {
      width: 130vw;
      top: -3vw;
    }
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
`;

export const StyledCards = styled.div`
  display: flex;
  flex-flow: column;
  gap: 64px;
  justify-content: center;
  z-index: 2;
  max-width: 600px;

  ${StyledCard} {
    border: none;
    color: var(--primary-color);
    background-color: var(--secondary-color);

    h2 span {
      font-size: 18px;
      line-height: 22px;
      font-weight: 200;
    }

    svg {
      width: 100px;
      color: var(--primary-color);
    }

    &:last-of-type svg {
      rotate: 35deg;
    }
  }
`;
