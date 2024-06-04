import { styled } from '@linaria/react';

export const StyledTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  img {
    border-radius: 50px;
    width: 40px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
