import { StyledIcon, StyledLinks, StyledTopBar } from './styled-TopBar';
import ProfilePicture from '../../assets/profile.jpg';

const TopBar = ({ children }) => {
  return (
    <StyledTopBar>
      <StyledIcon>
        <img src={ProfilePicture} />
        <span>BALA CARTER</span>
      </StyledIcon>
      <StyledLinks>{children}</StyledLinks>
    </StyledTopBar>
  );
};

export default TopBar;
