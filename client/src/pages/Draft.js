import React from 'react';

import boosterMaker from '../utils/boosterMaker';
import CardPool from '../components/CardPool';

const Draft = () => {
  let cardsArray = [];
  let draftPod = [
    [
      [],[],[]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ]
  ];

  for (let i=0; i<8; i++) {
    for (let j=0; j<3; j++) {
      draftPod[i][j] = boosterMaker.makePack();
    }
  }

  for (let i=0; i<8; i++) {
    for (let j=0; j<3; j++) {
      cardsArray = cardsArray.concat(draftPod[i][j]);
    }
  }

  const cardNames = [ ...new Set(cardsArray)];

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          < CardPool cardNames={cardNames} draftPod={draftPod}/>
        </div>
      </div>
    </main>
  );
};

export default Draft;