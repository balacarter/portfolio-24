import Card from '../Card';
import GeometricImage from '../../assets/geometric';
import { StyledCards, StyledEducationPage } from './styled-Education';

const EducationPage = () => {
  return (
    <StyledEducationPage>
      <GeometricImage />
      <h1>EDUCATION</h1>
      <StyledCards>
        <Card
          title={<h1>B.S in Computer Science</h1>}
          subtitle={
            <>
              <h2>
                CSU: Los Angeles
                <span> 2018 - 2021</span>
              </h2>
            </>
          }
        />
        <Card
          title={<h1>CSU: Los Angeles</h1>}
          subtitle={
            <>
              <h2>
                B.S Computer Science
                <span> 2018 - 2021</span>
              </h2>
            </>
          }
        />
        <Card
          title={<h1>CSU: Los Angeles</h1>}
          subtitle={
            <>
              <h2>
                B.S Computer Science
                <span> 2018 - 2021</span>
              </h2>
            </>
          }
        />
        <Card
          title={<h1>CSU: Los Angeles</h1>}
          subtitle={
            <>
              <h2>
                B.S Computer Science
                <span> 2018 - 2021</span>
              </h2>
            </>
          }
        />
      </StyledCards>
    </StyledEducationPage>
  );
};

export default EducationPage;
