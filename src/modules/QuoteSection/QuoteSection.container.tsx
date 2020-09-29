import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { QuoteSection } from '.';
import { Quote, QuoteSectionContainerProps } from '../../../typings/types';

interface Params {
  id: string | undefined;
}

const QuoteSectionContainer = ({ data }: QuoteSectionContainerProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [randomQuote, setRandomQuote] = React.useState<Quote | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const location = useLocation();
  const history = useHistory();
  const params = useParams<Params>();
  const selectedQuote: URLSearchParams = new URLSearchParams(location.search);
  const typeId = params.id ? parseInt(params.id, 10) : 0;

  React.useEffect(() => {
    if (selectedQuote.has('quote') && parseInt(selectedQuote.get('quote') || '', 10).toString() === selectedQuote.get('quote')) {
      getSelectedQuote(parseInt(selectedQuote.get('quote') || '', 10));
    } else {
      getRandomQuote();
    }
    return () => setIsLoading(false);
  }, []);

  const getSelectedQuote = (id: number) => {
    setIsLoading(true);
    return fetch(`https://blizzard-quotes-api.herokuapp.com/api/v1/quotes/get-by-id?quoteId=${id}`)
      .then((value) => value.json())
      .then((response) => {
        switch (response.type) {
          case 'Warcraft': history.push(`/warcraft/1?quote=${parseInt(selectedQuote.get('quote') || '', 10)}`); break;
          case 'Starcraft': history.push(`/starcraft/2?quote=${parseInt(selectedQuote.get('quote') || '', 10)}`); break;
          case 'Overwatch': history.push(`/overwatch/3?quote=${parseInt(selectedQuote.get('quote') || '', 10)}`); break;
          case 'Diablo': history.push(`/diablo/4?quote=${parseInt(selectedQuote.get('quote') || '', 10)}`); break;
          default: history.push('/'); break;
        }

        return response;
      })
      .then((res) => setRandomQuote(res))
      .catch((catchedError) => setError(catchedError.message))
      .finally(() => setIsLoading(false));
  };

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
      type={data.type}
      background={data.background}
      isLoading={isLoading}
      onLoad={() => getRandomQuote()}
      quoteData={randomQuote}
      error={error}
    />
  );
};

export default QuoteSectionContainer;
