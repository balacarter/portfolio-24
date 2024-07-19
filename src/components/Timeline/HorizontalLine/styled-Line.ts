import { styled } from '@linaria/react';

export const StyledTimelineTable = styled.table`
  height: fit-content;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: auto;

  td {
    width: 33%;
    &:not(:first-of-type) span {
      margin-left: -20px;
    }
  }
`;

export const StyledMarkersTR = styled.tr`
  height: 10px;
  td {
    border: 4px solid var(--primary-color);
    border-top: none;
  }
`;
