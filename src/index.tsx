import { render } from 'preact';
import './style.css';
import StyledApp from './styled-App';
import TopBar from './components/top-bar';
import Hero from './components/Hero';
import Story from './components/Story';
import Timeline from './components/Timeline';
import EducationPage from './components/Education';

export function App() {
  return (
    <StyledApp>
      <TopBar>
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>Contact</span>
      </TopBar>
      <Hero />
      <Timeline />
      <EducationPage />
      {/* <Story /> */}
    </StyledApp>
  );
}

render(<App />, document.getElementById('app'));
