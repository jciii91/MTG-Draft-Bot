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
  let mainDeckColors = [0,0,0,0,0]; // White, Blue, Black, Red, Green
  let mainDeckTypes = [0,0]; // Creature vs Non Creature/Non Land
  let mainDeckcmcAvg = 0;
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

        let maxInc = 0;
        cardIncs.forEach(i => {
          if (i > maxInc) {
            maxInc = i;
          }
        })

        document.getElementById('mainBoard').style.minHeight = (300 + maxInc * 30) + 'px';

        return card;
      }
    )
  }

  function drawSideDeck() {
    const sideDeckColumn = document.getElementById('sideDeck');
    let cardIncs = 0;

    while (sideDeckColumn.firstChild) {
      sideDeckColumn.removeChild(sideDeckColumn.firstChild);
    }

    sideDeck.map(card => {
        let img = new Image();
        img.src = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + card.multiverseId + '&type=card';
        img.alt = card.name;
        img.key = card.name;
        img.ondblclick = changeBoards;
        img.style.position = 'absolute';
        img.className = 'w-95 side';

        img.style.top = cardIncs * 30 + 'px';
        img.style.zIndex = cardIncs;
        cardIncs++;
        sideDeckColumn.appendChild(img);

        return card;
      }
    )

    document.getElementById('sideBoard').style.minHeight = (300 + sideDeck.length * 30) + 'px';
  }

  function getMainDeckDetails() {
    mainDeckColors = [0,0,0,0,0]; // White, Blue, Black, Red, Green
    mainDeckTypes = [0,0] // C vs nC / nL
    mainDeckcmcAvg = 0;
    mainDeck.forEach(card => {
      const cardCost = card.manaCost;
      for (let i=0; i<cardCost.length; i++) {
        const color = cardCost[i];
        switch (color) {
          case 'W':
            mainDeckColors[0]++;
            break;
          case 'U':
            mainDeckColors[1]++;
            break;
          case 'B':
            mainDeckColors[2]++;
            break;
          case 'R':
            mainDeckColors[3]++;
            break;
          case 'G':
            mainDeckColors[4]++;
            break;
          default:
            break;
        }
      }
      
      const cardType = card.types[0];
      if (cardType === 'Creature') { 
        mainDeckTypes[0]++;
      } else if (!(cardType === 'Creature') && !(cardType === 'Land')) {
        mainDeckTypes[1]++;
      }

      const cmc = card.cmc;
      mainDeckcmcAvg += cmc;
    })
    mainDeckcmcAvg = (mainDeckcmcAvg /= mainDeck.length).toFixed(1);
  }

  function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  function drawPieChart() {
    const detailsColumn = document.getElementById('details');

    while (detailsColumn.firstChild) {
      detailsColumn.removeChild(detailsColumn.firstChild);
    }

    let canvas = document.createElement('canvas');
    canvas.id = "pieCanvas";
    canvas.width = 200;
    canvas.height = 200;

    const ctx = canvas.getContext("2d");
    const colors = ['#FFFFFF','#0000FF','#000000','#FF0000','#228B22','#808080'];
    const colorCount = mainDeckColors;

    let total_value = 0;
    let color_index = 0;

    colorCount.forEach(color => {
      total_value += color;
    })

    if (total_value === 0) {
      drawPieSlice(
        ctx,
        canvas.width/2,
        canvas.height/2,
        Math.min(canvas.width/2,canvas.height/2),
        0,
        2 * Math.PI,
        '#808080'
      );
    }

    let start_angle = 0;
    colorCount.forEach(color => {
      let slice_angle = 2 * Math.PI * color / total_value;

      drawPieSlice(
        ctx,
        canvas.width/2,
        canvas.height/2,
        Math.min(canvas.width/2,canvas.height/2),
        start_angle,
        start_angle+slice_angle,
        colors[color_index]
      );

      start_angle += slice_angle;
      color_index++;
    })

    document.getElementById('details').appendChild(canvas);
  }

  function writeBreakdown() {
    const breakdownColumn = document.getElementById('breakdown');

    while (breakdownColumn.firstChild) {
      breakdownColumn.removeChild(breakdownColumn.firstChild);
    }

    let breakdown = document.createElement('ul');
    let detailsArray = [
      'Creatures: ' + mainDeckTypes[0],
      'Noncreatures: ' + mainDeckTypes[1],
      'Average CMC: ' + mainDeckcmcAvg,
    ]

    detailsArray.forEach(text => {
      let listEL = document.createElement('li');
      let spanEL = document.createElement('span');
      spanEL.innerText = text;
      listEL.appendChild(spanEL);
      breakdown.appendChild(listEL);
    })

    document.getElementById('breakdown').appendChild(breakdown);
  }

  function botHand(pack) {
    let botPrio = 0;
    let botPick = 0;
    pack.forEach((card, index) => {
      let tempPrio = card.rank;
      if (tempPrio > botPrio) { 
        botPrio = tempPrio;
        botPick = index;
      }
    })
    return cardDict[pack[botPick].name];
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
        const botTarget = botHand(draftPod[pack][roundCounter]);
        console.log(draftPod[pack][roundCounter]);
        botDecks[i-1].push(botTarget);
        const loopArray = draftPod[pack][roundCounter].map(card => card.name);
        const botTargetIndex = loopArray.indexOf(botTarget.name);
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
        const botTarget = botHand(draftPod[pack][roundCounter]);
        console.log(botTarget);
        botDecks[i-1].push(botTarget);
        const loopArray = draftPod[pack][roundCounter].map(card => card.name);
        const botTargetIndex = loopArray.indexOf(botTarget.name);
        draftPod[pack][roundCounter].splice(botTargetIndex,1);
      }

      pickCounter < 1 ? pickCounter = 7 : pickCounter--;

    }

    drawMainBoard();
    getMainDeckDetails();
    drawPieChart();
    writeBreakdown()
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

    if (event.target.className.includes('main')){
      let targetIndex = -1;
      mainDeck.forEach(card => {
        if (card.name === cardName) {
          targetIndex = mainDeck.indexOf(card);
        }
      })
      sideDeck.push(mainDeck[targetIndex]);
      mainDeck.splice(targetIndex, 1);
    } else {
      let targetIndex = -1;
      sideDeck.forEach(card => {
        if (card.name === cardName) {
          targetIndex = sideDeck.indexOf(card);
        }
      })
      mainDeck.push(sideDeck[targetIndex]);
      sideDeck.splice(targetIndex, 1);
    }
    drawMainBoard();
    getMainDeckDetails();
    drawPieChart();
    writeBreakdown()
    drawSideDeck();
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

      <div className='flex-row'>
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
      </div>

      <div className='flex-row'>
        <div id='sideBoard' className='flex-row col-12 justify-space-around'>
          <div id='sideDeck' className='flex-column pos-rel col-2'>

          </div>

          <div id='details' className='flex-column pos-rel col-2'>

          </div>

          <div id='breakdown' className='flex-column pos-rel col-2'>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardPool;