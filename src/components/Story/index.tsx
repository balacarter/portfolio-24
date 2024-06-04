import Card from '../Card';
import CardImage1 from '../../assets/card1.jpeg';
import CardImage2 from '../../assets/card2.jpeg';
import CardImage3 from '../../assets/card3.jpeg';
import CardImage4 from '../../assets/card4.jpeg';
import { StyledStory, StyledStoryCards } from './styled-Story';

const Story = () => {
  return (
    <StyledStory>
      <h1>My Story</h1>
      <StyledStoryCards>
        <Card image={CardImage1}>
          <h1>Education</h1>
          <p class="card-content">
            Lorem Ipsum test lol oka. yes we/ no okay. well then can I think of
            otehr words
          </p>
        </Card>
        <Card image={CardImage2}>
          <h1>Blah Blah</h1>
          <p class="card-content">
            Lorem Ipsum test lol oka. yes we/ no okay. well then can I think of
            otehr words
          </p>
        </Card>
        <Card image={CardImage3}>
          <h1>ETC ETC</h1>
          <p class="card-content">
            Lorem Ipsum test lol oka. yes we/ no okay. well then can I think of
            otehr words
          </p>
        </Card>
        <Card image={CardImage4}>
          <h1>Test</h1>
          <p class="card-content">
            Lorem Ipsum test lol oka. yes we/ no okay. well then can I think of
            otehr words
          </p>
        </Card>
      </StyledStoryCards>
    </StyledStory>
  );
};

export default Story;
