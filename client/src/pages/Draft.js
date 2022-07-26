import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_CARDS } from '../utils/queries';

const Draft = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CARDS);

  const cards = data?.cards || [];

  console.log(cards);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
        {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <span>Check console log.</span>
            </div>
          )
        }
        </div>
      </div>
    </main>
  );
};

export default Draft;