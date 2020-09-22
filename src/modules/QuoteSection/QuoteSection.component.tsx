import React from 'react';
import { QuoteSection } from '.';
import { QuoteSectionProps } from '../../../typings/types';
import Card from '../../components/Card';
import Tweet from '../../assests/images/tweet.webp';

const QuoteSectionComponent = ({
  title,
  background,
  onLoad,
  isLoading,
  quoteData,
  error,
}: QuoteSectionProps) => (
    <QuoteSection.Styles className="bq_section fadeIn" background={background}>
      <Card
        header={
          <div>
            <h2>{title}</h2>
          </div>
        }
        body={
          <div className={`${isLoading ? 'fadeOut' : 'fadeIn'}`}>
            {error
              ? (
                <>
                  <p className="bq_card_body_quote quote">{error}</p>
                  <p className="bq_card_body_quote author">Whoops Error :(</p>
                </>
              ) : (
                <>
                  <p className="bq_card_body_quote quote">“ {quoteData?.quote}”</p>
                  <p className="bq_card_body_quote author">{quoteData?.author}.</p>
                </>
              )}
          </div>
        }
        footer={
          <div className="bq_card_footer_action-group">
            {error
              ? <button onClick={onLoad} className="bq_wow_button">Try Again</button>
              : (
                <>
                  <a
                    href={`http://twitter.com/intent/tweet?url=${window.location.href}&text="${quoteData?.quote}"%20by%20${quoteData?.author}&hashtags=BlizzardQuotes`}
                    target="_blank"
                    className="bq_wow_button"
                  >
                    <img src={Tweet} width="16" height="16" />
                  &nbsp;&nbsp;Tweet It
                </a>

                  <button onClick={onLoad} className="bq_wow_button">Random</button>
                </>
              )}
          </div>
        }
        loader={
          < div className={`fadeIn bq_shadow ${isLoading ? 'fadeIn' : 'fadeOut'}`}>
            <div className="bq_shadow_loader smoking-loader" />
          </div >}
      />
    </QuoteSection.Styles >
);

export default QuoteSectionComponent;
