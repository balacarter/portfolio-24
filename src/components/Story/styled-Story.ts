import { styled } from '@linaria/react';

export const StyledStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding-bottom: 64px;
`;

export const StyledStoryCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin: 0 15%;
`;
