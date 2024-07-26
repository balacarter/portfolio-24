import {
  StyledDivider,
  StyledLeftHero,
  StyledHero,
  StyledHeroHeading,
  StyledHeroImage,
  StyledSubHeading,
  StyledTechStack,
  StyledTechStackItem,
  StyledLargeSubContent,
  StyledSmallSubContent,
  StyledHeroImageLarge,
  StyledHeroImageSmall,
} from './styled-Hero';
import HeroImage from '../../assets/low-poly-mtn.png';
import content from '../content';

const TechStack = ({ stack }: { stack: string[] }) => {
  return (
    <>
      {stack.map((item) => (
        <StyledTechStackItem>{item}</StyledTechStackItem>
      ))}
    </>
  );
};

const Hero = () => {
  return (
    <StyledHero>
      <StyledLeftHero>
        <StyledHeroImageSmall>
          <StyledHeroImage src={HeroImage} />
        </StyledHeroImageSmall>
        <StyledHeroHeading
          dangerouslySetInnerHTML={{ __html: content.heroHeading }}
        />
        <StyledLargeSubContent>
          <StyledSubHeading
            dangerouslySetInnerHTML={{ __html: content.heroSubHeading }}
          />
          <StyledDivider />
          <div>
            <h3>// Tech Stack</h3>
            <StyledTechStack>
              <TechStack stack={content.techStack} />
            </StyledTechStack>
          </div>
        </StyledLargeSubContent>
      </StyledLeftHero>
      <StyledHeroImageLarge>
        <StyledHeroImage src={HeroImage} />
      </StyledHeroImageLarge>
      <StyledSmallSubContent>
        <StyledSubHeading
          dangerouslySetInnerHTML={{ __html: content.heroSubHeading }}
        />
        <StyledDivider />
        <div>
          <h3>// Tech Stack</h3>
          <StyledTechStack>
            <TechStack stack={content.techStack} />
          </StyledTechStack>
        </div>
      </StyledSmallSubContent>
    </StyledHero>
  );
};

export default Hero;
