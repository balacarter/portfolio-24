import { styled } from '@linaria/react';

export const StyledChildren = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
  padding: 8px;
  gap: 8px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 0;
    size: 16px;
  }
`;

export const StyledCard = styled.div`
  @keyframes image-zoom-in {
    from {
      background-size: 110%;
    }
    to {
      background-size: 150%;
    }
  }
  @keyframes image-zoom-out {
    from {
      background-size: 150%;
    }
    to {
      background-size: 110%;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  height: 360px;
  overflow: hidden;
  background-size: 110%;
  background-repeat: no-repeat;
  border-top-right-radius: 25px;
  animation: image-zoom-out;
  animation-duration: 2s;
  background-size: 110%;

  .card-content {
    display: none;
  }

  &:hover {
    animation: image-zoom-in;
    animation-duration: 6s;
    background-size: 150%;

    ${StyledChildren} {
      padding-bottom: 16px;
    }
    .card-content {
      display: block;
    }
  }
`;

export const StyledDragBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    width: 28px;
    height: 4px;
    background-color: var(--secondary-color);
    border-radius: 8px;
  }
`;
