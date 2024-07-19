import { styled } from '@linaria/react';

export const StyledTimelineTable = styled.table`
  height: fit-content;
  height: 100vh;
  border-collapse: collapse;
  position: absolute;
  right: 15px;

  td {
    &:first-of-type {
      padding-right: 10px;
    }
    text-align: right;
    height: 33%;
    vertical-align: top;

    span {
      display: block;
      margin-top: -12px;
    }

    div span:last-of-type {
      margin-top: 0;
      margin-bottom: -12px;
    }
  }
`;

export const StyledMarkersTD = styled.td`
  width: 15px;
  border: 4px solid var(--primary-color);
  border-left: none;
`;
