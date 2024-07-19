import { StyledDivider } from '../Hero/styled-Hero';
import HorizontalLine from './HorizontalLine/horizontalLine';
import {
  StyledItemContent,
  StyledItemContentWrapper,
  StyledTimelineHeading,
  StyledTimelineItem,
  StyledTimelineItems,
  StyledTimeLinePage,
  StyledTimelineSubTitle,
} from './styled-Timeline';
import VerticalLine from './VerticalLine/verticalLine';

const Timeline = () => (
  <StyledTimeLinePage>
    <StyledTimelineItems>
      <StyledTimelineItem>
        <div>
          <StyledTimelineHeading>Cover Genius</StyledTimelineHeading>
          <StyledTimelineSubTitle>
            Software Engineer, Frontend
          </StyledTimelineSubTitle>
        </div>
        <StyledDivider />
      </StyledTimelineItem>
      <StyledTimelineItem>
        <div>
          <StyledTimelineHeading>Mercury Insurance</StyledTimelineHeading>
          <StyledTimelineSubTitle>
            Software Engineer, Frontend
          </StyledTimelineSubTitle>
        </div>
        <StyledDivider />
      </StyledTimelineItem>
      <StyledTimelineItem>
        <div>
          <StyledTimelineHeading>ACTNow Foundation</StyledTimelineHeading>
          <StyledTimelineSubTitle>
            Software Engineer, Intern
          </StyledTimelineSubTitle>
        </div>
        <StyledDivider />
        <StyledItemContentWrapper>
          <StyledItemContent>
            Lorem Ipsum test content I worked a lot I kinow lalalalalalalal
          </StyledItemContent>
          <StyledItemContent>
            Lorem Ipsum test content I worked a lot I kinow lalalalalalalal
          </StyledItemContent>
          <StyledItemContent>
            Lorem Ipsum test content I worked a lot I kinow lalalalalalalal
          </StyledItemContent>
        </StyledItemContentWrapper>
      </StyledTimelineItem>
    </StyledTimelineItems>
    <HorizontalLine />
    <VerticalLine />
  </StyledTimeLinePage>
);

export default Timeline;
