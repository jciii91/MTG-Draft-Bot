import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_CARDS } from '../../utils/queries';

const CardPool = ({ cardNames, podNames }) => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CARDS, {
    variables: {names: cardNames}
  });

  const cards = data?.cards || [];

  console.log(cards);

  let cardDict = {};
  for (let i=0; i<cards.length; i++) {
    cardDict[cards[i].name] = cards[i];
  }

  console.log(cardDict);
  console.log(podNames);

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
      for (let z=0; z<14; z++) {
        draftPod[i][j][z] = cardDict[podNames[i][j][z]];
      }
    }
  }

  console.log(draftPod);

  return (
    <div>
      <h3>
        Check console log.
      </h3>
    </div>
  );
};

export default CardPool;