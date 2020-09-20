import React from 'react';
import { Card } from '.';
import { CardProps } from '../../../typings/types';

const CardComponent = (
  {
    header,
    body,
    footer,
    loader,
  }: CardProps,
) => (
    <Card.Styles>
      <div className="bq_card_smoke smoking" />
      <div className="bq_card_header">
        <>{header}</>
      </div>
      <div className="bq_card_body">
        {body}
      </div>
      <div className="bq_card_footer">
        {footer}
      </div>
      {loader}
    </Card.Styles>
);

export default CardComponent;
