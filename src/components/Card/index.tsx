import { JSX } from 'preact/jsx-runtime';
import { StyledCard } from './styled-Card';

interface CardProps {
  title?: JSX.Element;
  subtitle?: JSX.Element;
  body?: JSX.Element;
  image?: JSX.Element;
}

const Card = ({ title, subtitle, body, image }: CardProps) => (
  <StyledCard>
    {image}
    {title}
    {subtitle}
    {body}
  </StyledCard>
);

export default Card;
