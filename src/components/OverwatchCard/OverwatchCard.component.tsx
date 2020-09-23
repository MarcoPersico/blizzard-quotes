import React from 'react';
import { OverwatchCard } from '.';
import { CardProps } from '../../../typings/types';

const CardComponent = (
  {
    header,
    body,
    footer,
    loader,
  }: CardProps,
) => (
    <OverwatchCard.Styles>
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
      <div className="bq_card_ow_highlight" />
    </OverwatchCard.Styles>
);

export default CardComponent;
