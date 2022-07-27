import React from 'react';

import boosterMaker from '../utils/boosterMaker';
import CardPool from '../components/CardPool';

const Draft = () => {
  const randomNames = boosterMaker.makePack();

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          < CardPool randomNames={randomNames} />
        </div>
      </div>
    </main>
  );
};

export default Draft;