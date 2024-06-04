import { styled } from '@linaria/react';

export const StyledHero = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const StyledLeftHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledHeroHeading = styled.h1`
  font-size: 64px;
  font-weight: 400;
  line-height: 72px;
  margin: 0;
`;

export const StyledSubHeading = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 200;
  max-width: calc(100% - 20%);
`;

export const StyledHeroImage = styled.img`
  height: 700px;
  border-radius: 25px;
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
`;
