import { styled } from '@linaria/react';

export const StyledHero = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 16px;
  margin: 5% 15% 0 15%;
  padding-bottom: 32px;
  min-height: 100vh;

  @media (width >= 1200px) {
    gap: 32px;
  }
`;

export const StyledLeftHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  height: max-content;

  @media (width >= 992px) {
    flex: 0.5;
  }
`;

export const StyledLargeSubContent = styled.div`
  display: none;

  @media (width >= 1400px) {
    display: block;
  }
`;

export const StyledSmallSubContent = styled.div`
  display: block;

  @media (width >= 1400px) {
    display: none;
  }
`;

export const StyledHeroHeading = styled.h1`
  font-size: 38px;
  font-weight: 400;
  line-height: 125%;
  margin: 0;

  @media (width >= 992px) {
    font-size: 45px;
  }

  @media (width >= 1200px) {
    font-size: 56px;
  }
`;

export const StyledSubHeading = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 200;
`;

export const StyledHeroImage = styled.img`
  max-width: 100%;

  animation-name: floating;
  animation-duration: 5.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  filter: drop-shadow(0px 80px 250px var(--shadow-color));

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 12px);
      filter: drop-shadow(0px 60px 200px var(--shadow-color));
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @media (width >= 992px) {
    margin-left: 30px;
  }
`;

export const StyledHeroImageSmall = styled.div`
  height: max-content;
  @media (width >= 992px) {
    display: none;
  }
`;

export const StyledHeroImageLarge = styled.div`
  display: none;
  height: max-content;

  @media (width >= 992px) {
    display: block;
    flex: 0.5;
  }
`;

export const StyledDivider = styled.div`
  height: 0;
  border: 1px solid var(--secondary-color);
`;

export const StyledTechStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 700px;
`;

export const StyledTechStackItem = styled.div`
  padding: 12px;
  background-color: var(--secondary-color);
  color: var(--primary-color);

  /* &:hover {
    box-shadow: 0px 10px 90px var(--secondary-color);
  } */
`;
