import { StyledTimelineTable, StyledMarkersTR } from './styled-Line';

const HorizontalLine = ({ className }: { className?: string }) => (
  <StyledTimelineTable className={className}>
    <tr>
      <td>
        <span>Present</span>
      </td>
      <td>
        <span>2022</span>
      </td>
      <td>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>2021</span>
          <span>2020</span>
        </div>
      </td>
    </tr>
    <StyledMarkersTR>
      <td></td>
      <td></td>
      <td></td>
    </StyledMarkersTR>
  </StyledTimelineTable>
);

export default HorizontalLine;
