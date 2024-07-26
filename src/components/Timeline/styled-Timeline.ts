import { styled } from '@linaria/react';
import { StyledDivider } from '../Hero/styled-Hero';
import { StyledTimelineTable as HorizontalLine } from './HorizontalLine/styled-Line';
import { StyledTimelineTable as VerticalLine } from './VerticalLine/styled-Line';

export const StyledTimeLinePage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  color: var(--primary-color);
  min-height: 100vh;
  background-color: var(--secondary-color);

  ${HorizontalLine} {
    display: none;
  }

  @media (width >= 992px) {
    flex-direction: column;
    ${VerticalLine} {
      display: none;
    }

    ${HorizontalLine} {
      display: table;
    }
  }
`;

export const StyledTimelineItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (width >= 992px) {
    flex-direction: row;
    align-items: normal;
    margin-top: auto;
  }
`;

export const StyledTimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0 15px 15px 15px;
  height: 33%;
  margin-top: -15px;
  max-width: 60%;

  ${StyledDivider} {
    border-color: var(--primary-color);
    width: 60%;
  }

  @media (width >= 992px) {
    height: initial;
    flex: 1;
    margin-top: 0;
    &:not(:last-of-type) {
      border-right: 2px solid var(--primary-color);
      border-bottom: none;
    }
  }
`;

export const StyledTimelineHeading = styled.h1`
  font-size: 22px;
  text-align: center;
  margin: 0;
`;

export const StyledTimelineSubTitle = styled.h3`
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

export const StyledItemContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const StyledItemContent = styled.div`
  flex: 1;
`;
