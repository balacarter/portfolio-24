import { useEffect, useRef, useState } from 'preact/hooks';
import { StyledIcon, StyledLinks, StyledTopBar } from './styled-TopBar';

const TopBar = ({ children }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => setScrollY(window.scrollY);
  }, [window.scrollY]);

  return (
    <StyledTopBar className={scrollY > 30 ? 'scrolled' : ''}>
      <StyledIcon>
        <span>BALA CARTER</span>
      </StyledIcon>
      <StyledLinks>{children}</StyledLinks>
    </StyledTopBar>
  );
};

export default TopBar;
