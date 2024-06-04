import { render } from 'preact';
import './style.css';
import StyledApp from './styled-App';
import TopBar from './components/top-bar';
import Hero from './components/Hero';
import Story from './components/Story';

export function App() {
  return (
    <StyledApp>
      <TopBar>
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>Contact</span>
      </TopBar>
      <Hero />
      <Story />
    </StyledApp>
  );
}

render(<App />, document.getElementById('app'));
