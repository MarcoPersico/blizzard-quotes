import React from 'react';
import { StarcraftCard } from '.';
import { CardProps } from '../../../typings/types';

const CardComponent = (
  {
    header,
    body,
    footer,
    loader,
  }: CardProps,
) => (
    <StarcraftCard.Styles>
      <div className="bq_starcraft_border glow" />
      <div className="bq_card_header">
        {header}
      </div>
      <div className="bq_card_body">
        {body}
      </div>
      <div className="bq_card_footer">
        {footer}
      </div>
      {loader}
    </StarcraftCard.Styles>
);

export default CardComponent;
