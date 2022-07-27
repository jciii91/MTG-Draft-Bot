import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_CARDS } from '../../utils/queries';

const CardPool = ({ randomNames }) => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CARDS, {
    variables: {names: randomNames}
  });

  const cards = data?.cards || [];

  console.log(cards);

  return (
    <div>
      <h3>
        Check console log.
      </h3>
    </div>
  );
};

export default CardPool;