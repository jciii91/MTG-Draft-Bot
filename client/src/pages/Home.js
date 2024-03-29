import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_SETS } from '../utils/queries';
import SetList from '../components/SetList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_SETS);

  const sets = data?.sets || [];

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
        {loading ? (
            <div>Loading...</div>
          ) : (
            < SetList sets={sets} />
          )
        }
        </div>
      </div>
    </main>
  );
};

export default Home;
