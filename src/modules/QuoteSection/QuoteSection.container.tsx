import React from 'react';
import { useParams } from 'react-router';
import { QuoteSection } from '.';
import { Quote, QuoteSectionContainerProps } from '../../../typings/types';

interface Params {
  id: string | undefined;
}

const QuoteSectionContainer = ({ data }: QuoteSectionContainerProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [randomQuote, setRandomQuote] = React.useState<Quote | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const params = useParams<Params>();
  const typeId = params.id ? parseInt(params.id, 10) : 0;

  React.useEffect(() => {
    getRandomQuote();

    return () => setIsLoading(false);
  }, []);

  const getRandomQuote = () => {
    setIsLoading(true);
    return fetch(`https://blizzard-quotes-api.herokuapp.com/api/v1/quotes/get-random?type=${typeId}`)
      .then((value) => value.json())
      .then((response) => setRandomQuote(response))
      .catch((catchedError) => setError(catchedError.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <QuoteSection.Component
      title={data.title}
      background={data.background}
      isLoading={isLoading}
      onLoad={() => getRandomQuote()}
      quoteData={randomQuote}
      error={error}
    />
  );
};

export default QuoteSectionContainer;
