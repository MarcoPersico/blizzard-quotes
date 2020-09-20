import styled from 'styled-components';

const QuoteSectionStyles = styled.div<{ background: string }>`
  background-image: url('${(props) => props.background}');
  background-size: cover;
  background-repeat: no-repeat;

  .bq_section {
  }
`;

export default QuoteSectionStyles;
