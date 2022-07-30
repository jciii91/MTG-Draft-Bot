import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_CARDS } from '../../utils/queries';

const CardPool = ({ cardNames, podNames }) => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CARDS, {
    variables: {names: cardNames}
  });

  const cards = data?.cards || [];

  let cardDict = {};
  for (let i=0; i<cards.length; i++) {
    cardDict[cards[i].name] = cards[i];
  }

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

  let pickCounter = 0;
  let roundCounter = 0;

  function userPick() {
    const booster = document.getElementById('draftBooster');
    while (booster.firstChild) {
      booster.removeChild(booster.firstChild);
    }
    pickCounter > 6 ? pickCounter = 0 : pickCounter++;
    draftPod[pickCounter][roundCounter].map(card => {
        let img = new Image();
        img.src = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + card.multiverseId + '&type=card';
        img.alt = card.name;
        img.key = card.name;
        img.ondblclick = userPick;
        booster.appendChild(img);

        return card;
      }
    )
    return;
  }

  return (
    <div id='draftBooster' className='flex-row justify-space-around'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        draftPod[roundCounter][pickCounter].map(card => 
          <img 
            src={`https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${card.multiverseId}&type=card`} 
            alt={card.name}
            key={card.name}
            onDoubleClick={userPick}
          />
        )
      )}
    </div>
  );
};

export default CardPool;