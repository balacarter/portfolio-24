import {
  StyledDivider,
  StyledLeftHero,
  StyledHero,
  StyledHeroHeading,
  StyledHeroImage,
  StyledSubHeading,
  StyledTechStack,
  StyledTechStackItem,
} from './styled-Hero';
import HeroImage from '../../assets/hero1.jpeg';

const Hero = () => {
  return (
    <StyledHero>
      <StyledLeftHero>
        <StyledHeroHeading>
          I AM A FRONTEND ENGINEER WITH A PASSION FOR CODING AND CREATING.
        </StyledHeroHeading>
        <StyledSubHeading>
          Originally trained in coding, I ventured into the world of design to
          create seamless user experiences. My journey led me to specialize in
          frontend engineering, where I blend creativity with functionality to
          bring ideas to life. Now, I showcase my skills through interactive web
          experiences that captivate and inspire.
        </StyledSubHeading>
        <StyledDivider />
        <div>
          <h3>// Tech Stack</h3>
          <StyledTechStack>
            <StyledTechStackItem>TypeScript</StyledTechStackItem>
            <StyledTechStackItem>React</StyledTechStackItem>
            <StyledTechStackItem>Preact</StyledTechStackItem>
            <StyledTechStackItem>CSS/SCSS</StyledTechStackItem>
            <StyledTechStackItem>CSS-in-JS</StyledTechStackItem>
            <StyledTechStackItem>Vite</StyledTechStackItem>
            <StyledTechStackItem>WebPack</StyledTechStackItem>
          </StyledTechStack>
        </div>
      </StyledLeftHero>
      <div>
        <StyledHeroImage src={HeroImage} />
      </div>
    </StyledHero>
  );
};

export default Hero;
