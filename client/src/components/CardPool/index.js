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

  let flag = 0;
  let pickCounter = 0;
  let roundCounter = 0;
  let mainDeck = [];
  let sideDeck = [];
  let botDecks = [
    [],[],[],[],[],[],[]
  ]

  function drawPack() {
    const booster = document.getElementById('draftBooster');
    while (booster.firstChild) {
      booster.removeChild(booster.firstChild);
    }

    draftPod[pickCounter][roundCounter].map(card => {
        let img = new Image();
        img.src = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + card.multiverseId + '&type=card';
        img.alt = card.name;
        img.key = card.name;
        img.className = 'w-15 draft';
        img.ondblclick = userPick;
        booster.appendChild(img);

        return card;
      }
    )
    flag++;
  }

  function drawMainBoard() {
    const cmcColumns = [
      document.getElementById('cmc0'),
      document.getElementById('cmc1'),
      document.getElementById('cmc2'),
      document.getElementById('cmc3'),
      document.getElementById('cmc4'),
      document.getElementById('cmc5')
    ]
    let cardIncs = [0,0,0,0,0,0];

    cmcColumns.forEach(columns => {
      while (columns.firstChild) {
        columns.removeChild(columns.firstChild);
      }
    })

    mainDeck.map(card => {
        let img = new Image();
        img.src = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + card.multiverseId + '&type=card';
        img.alt = card.name;
        img.key = card.name;
        img.ondblclick = changeBoards;
        img.style.position = 'absolute';
        img.className = 'w-95 main';

        if (card.cmc < 5) {
          img.style.top = cardIncs[card.cmc] * 30 + 'px';
          img.style.zIndex = cardIncs[card.cmc];
          cardIncs[card.cmc]++;
          cmcColumns[card.cmc].appendChild(img);
        } else {
          img.style.top = cardIncs[5] * 30 + 'px';
          img.style.zIndex = cardIncs[5];
          cardIncs[5]++;
          cmcColumns[5].appendChild(img);
        }

        return card;
      }
    )
  }

  function userPick(event) {
    if (roundCounter !== 1) {
      const targetCard = cardDict[event.target.alt];
      mainDeck.push(targetCard);
      const namesArray = draftPod[pickCounter][roundCounter].map(card => card.name);
      const targetIndex = namesArray.indexOf(event.target.alt);
      draftPod[pickCounter][roundCounter].splice(targetIndex,1);

      for (let i=1; i<8; i++) {
        const pack = i + pickCounter > 7 ? i + pickCounter - 8 : i + pickCounter;
        const botTarget = cardDict[draftPod[pack][roundCounter][0].name];
        botDecks[i-1].push(botTarget);
        const loopArray = draftPod[pack][roundCounter].map(card => card.name);
        const botTargetIndex = loopArray.indexOf(draftPod[pack][roundCounter][0].name);
        draftPod[pack][roundCounter].splice(botTargetIndex,1);
      }

      pickCounter > 6 ? pickCounter = 0 : pickCounter++;

    } else {
      const targetCard = cardDict[event.target.alt];
      mainDeck.push(targetCard);
      const namesArray = draftPod[pickCounter][roundCounter].map(card => card.name);
      const targetIndex = namesArray.indexOf(event.target.alt);
      draftPod[pickCounter][roundCounter].splice(targetIndex,1);

      for (let i=1; i<8; i++) {
        const pack = i + pickCounter > 7 ? i + pickCounter - 8 : i + pickCounter;
        const botTarget = cardDict[draftPod[pack][roundCounter][0].name];
        botDecks[i-1].push(botTarget);
        const loopArray = draftPod[pack][roundCounter].map(card => card.name);
        const botTargetIndex = loopArray.indexOf(draftPod[pack][roundCounter][0].name);
        draftPod[pack][roundCounter].splice(botTargetIndex,1);
      }

      pickCounter < 1 ? pickCounter = 7 : pickCounter--;

    }

    drawMainBoard();
    drawPack();

    if (!(flag % 14)) {
      pickCounter = 0;
      roundCounter++;
      drawPack();
      flag = 0;
    }
    return;
  }

  function changeBoards(event) {
    const cardName = event.target.key;
    let targetIndex = -1;
    mainDeck.forEach(card => {
      if (card.name === cardName) {
        targetIndex = mainDeck.indexOf(card);
      }
    })
    sideDeck = mainDeck.splice(targetIndex, 1);
    drawMainBoard();
  }

  return (
    <>
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
              className='w-15 draft'
            />
          )
        )}
      </div>

      <div  className='flex-row'>
        <div id='mainBoard' className='flex-row col-10'>
          <div id='cmc0' className='flex-column pos-rel col-2'>

          </div>
          <div id='cmc1' className='flex-column pos-rel col-2'>

          </div>
          <div id='cmc2' className='flex-column pos-rel col-2'>

          </div>
          <div id='cmc3' className='flex-column pos-rel col-2'>

          </div>
          <div id='cmc4' className='flex-column pos-rel col-2'>

          </div>
          <div id='cmc5' className='flex-column pos-rel col-2'>

          </div>
        </div>

        <div id='sideBoard' className='flex-column pos-rel col-2'>

        </div>
      </div>
    </>
  );
};

export default CardPool;