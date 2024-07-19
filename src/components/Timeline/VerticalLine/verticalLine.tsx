import { StyledMarkersTD, StyledTimelineTable } from './styled-Line';

const VerticalLine = ({ className }: { className?: string }) => (
  <StyledTimelineTable className={className}>
    <tr>
      <td>
        <span>Present</span>
      </td>
      <StyledMarkersTD />
    </tr>
    <tr>
      <td>
        <span>2022</span>
      </td>
      <StyledMarkersTD />
    </tr>
    <tr>
      <td>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <span>2021</span>
          <span>2020</span>
        </div>
      </td>
      <StyledMarkersTD />
    </tr>
    {/* <tr>
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
    </StyledMarkersTR> */}
  </StyledTimelineTable>
);

export default VerticalLine;
