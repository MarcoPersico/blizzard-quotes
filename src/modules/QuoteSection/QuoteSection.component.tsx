import React from 'react';
import { QuoteSection } from '.';
import { QuoteSectionProps } from '../../../typings/types';
import WarcraftCard from '../../components/WarcraftCard';
import Tweet from '../../assests/images/tweet.webp';
import StarcraftCard from '../../components/StarcraftCard';

const QuoteSectionComponent = ({
  title,
  background,
  onLoad,
  isLoading,
  quoteData,
  error,
  type,
}: QuoteSectionProps) => {
  const renderHeader = () => (
    <div>
      <h2>{title}</h2>
    </div>
  );

  const renderBody = () => (
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
  );

  const renderFooter = (actionStyle: string) => (
    <div className="bq_card_footer_action-group">
      {error
        ? <button onClick={onLoad} className={actionStyle}>Try Again</button>
        : (
          <>
            <a
              href={`http://twitter.com/intent/tweet?url=${window.location.href}&text="${quoteData?.quote}"%20by%20${quoteData?.author}&hashtags=BlizzardQuotes`}
              target="_blank"
              className={actionStyle}
            >
              <img src={Tweet} width="16" height="16" />
        &nbsp;&nbsp;Tweet It
      </a>

            <button onClick={onLoad} className={actionStyle}>Random</button>
          </>
        )}
    </div>
  );

  const CurrentCard = () => {
    switch (type) {
      case 'warcraft':
        return (
          <WarcraftCard
            header={renderHeader()}
            body={renderBody()}
            footer={renderFooter('bq_wow_button')}
            loader={(
              <div className={`fadeIn bq_loader-container ${isLoading ? 'fadeIn' : 'fadeOut'}`}>
                <div className="bq_shadow_loader smoking-loader" />
              </div>
            )}
          />
        );
      case 'starcraft':
        return (
          <StarcraftCard
            header={renderHeader()}
            body={renderBody()}
            footer={renderFooter('bq_starcraft_button')}
            loader={(
              <div className={`fadeIn bq_loader-container ${isLoading ? 'fadeIn' : 'fadeOut'}`}>
              </div>
            )}
          />
        );
      default: return null;
    }
  };

  return (
    <QuoteSection.Styles className="bq_section fadeIn" background={background}>
      {CurrentCard()}
    </QuoteSection.Styles >
  );
};

export default QuoteSectionComponent;
