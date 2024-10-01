import { StyledCard, StyledChildren, StyledDragBar } from './styled-Card';

const Card = ({ image, children }) => {
  return (
    <StyledCard style={{ backgroundImage: `url(${image})` }}>
      <StyledChildren>
        <StyledDragBar>
          <div></div>
        </StyledDragBar>
        {children}
      </StyledChildren>
    </StyledCard>
  );
};

export default Card;
