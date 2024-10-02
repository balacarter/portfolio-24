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
          image={<GeometricImage />}
          title={<h1>CSU: Los Angeles</h1>}
          subtitle={
            <>
              <h2>
                B.S in Computer Science
                <span> 2018 - 2021</span>
              </h2>
            </>
          }
          body={<span>3.5 GPA | Dean's list | Cum Laude</span>}
        />
        <Card
          image={<GeometricImage />}
          title={<h1>Pasadena City College</h1>}
          subtitle={
            <>
              <h2>
                General Ed
                <span> 2016 - 2018</span>
              </h2>
            </>
          }
          body={<span>3.5 GPA | Dean's list</span>}
        />
      </StyledCards>
    </StyledEducationPage>
  );
};

export default EducationPage;
