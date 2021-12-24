let commonRunA = new Array();
    commonRunA[0] = {
        name: "Kasmina's Transmutation",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460984&type=card",
		priority: 91,
        cmc: "1U",
        type: "Enchantment",
        subtype: "Aura",
        set: "WAR",
        rules: "Enchant creature. Enchanted creature loses all abilities and has base power and toughness 1/1.",
        flavor: "\"Hop away now, little Eternal. Go eat some flies.\" — Kasmina",
        power: undefined,
        toughness: undefined
    }
    commonRunA[1] = {
        name: "Goblin Assault Team",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461056&type=card",
		priority: 42,
        cmc: "3R",
        type: "Creature",
        subtype: "Goblin Warrior",
        set: "WAR",
        rules: "Haste. When Goblin Assault Team dies, put a +1/+1 counter on target creature you control.",
        flavor: "Under the veneer of the various guilds, each goblin has the same basic need: to run screaming at the enemy and hit a bunch of stuff.",
        power: 4,
        toughness: 1
    }
    commonRunA[2] = {
        name: "Ironclad Krovod",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460946&type=card",
		priority: 36,
        cmc: "3W",
        type: "Creature",
        subtype: "Beast",
        set: "WAR",
        rules: undefined,
        flavor: "\"We need to block the exits from the plaza! What’s big, heavy, and available?\" —Gideon Jura",
        power: 2,
        toughness: 5
    }
    commonRunA[3] = {
        name: "Spellkeeper Weird",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460996&type=card",
		priority: 115,
        cmc: "2U",
        type: "Creature",
        subtype: "Weird",
        set: "WAR",
        rules: "Pay 2 mana, tap, and Sacrifice Spellkeeper Weird: Return target instant or sorcery card from your graveyard to your hand.",
        flavor: "They worked well as a team, but they knew it couldn’t last forever.",
        power: 1,
        toughness: 4
    }
    commonRunA[4] = {
        name: "Ahn-Crop Invader",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461040&type=card",
		priority: 87,
        cmc: "2R",
        type: "Creature",
        subtype: "Zombie Minotaur Warrior",
        set: "WAR",
        rules: "As long as it’s your turn, Ahn-Crop Invader has first strike. Pay 1, Sacrifice another creature: Ahn-Crop Invader gets +2/+0 until end of turn.",
        flavor: "\"Give me a crew like this one and I’d rule any sea I sailed.\" —Angrath",
        power: 2,
        toughness: 2
    }
    commonRunA[5] = {
        name: "War Screecher",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460966&type=card",
		priority: 98,
        cmc: "1W",
        type: "Creature",
        subtype: "Bird",
        set: "WAR",
        rules: "Flying. Pay 5W, and tap: Other creatures you control get +1/+1 until end of turn.",
        flavor: "Soaring over Vitu-Ghazi, New Prahv, and Orzhova, the Conclave’s trained falcons provided critical intelligence.",
        power: 1,
        toughness: 3
    }
    commonRunA[6] = {
        name: "Ashiok's Skulker",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460967&type=card",
		priority: 58,
        cmc: "5U",
        type: "Creature",
        subtype: "Nightmare",
        set: "WAR",
        rules: "Pat 3U: Ashiok’s Skulker can’t be blocked this turn.",
        flavor: "\"Fear writhes and whispers in the shadows of your mind. It is the enemy you always knew would come.\" —Ashiok",
        power: 3,
        toughness: 5
    }
    commonRunA[7] = {
        name: "Invading Manticore",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461061&type=card",
		priority: 65,
        cmc: "5R",
        type: "Creature",
        subtype: "Zombie Manticore",
        set: "WAR",
        rules: "When Invading Manticore enters the battlefield, amass 2. (Put two +1/+1 counters on an Army you control. If you don’t control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "\"Fall back! You are no match for this.\" —Samut",
        power: 4,
        toughness: 5
    }
    commonRunA[8] = {
        name: "Bulwark Giant",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460934&type=card",
		priority: 26,
        cmc: "5W",
        type: "Creature",
        subtype: "Giant Soldier",
        set: "WAR",
        rules: "When Bulwark Giant enters the battlefield, you gain 5 life.",
        flavor: "\"Where did she come from? More importantly, are there more like her?\" —Gideon Jura",
        power: 3,
        toughness: 6
    }
    commonRunA[9] = {
        name: "Kiora's Dambreaker",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460985&type=card",
		priority: 59,
        cmc: "5U",
        type: "Creature",
        subtype: "Leviathan",
        set: "WAR",
        rules: "When Kiora’s Dambreaker enters the battlefield, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
        flavor: "\"When your enemy flees, send the sea to pursue them.\" —Kiora",
        power: 5,
        toughness: 6
    }
    commonRunA[10] = {
        name: "Raging Kronch",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461068&type=card",
		priority: 147,
        cmc: "2R",
        type: "Creature",
        subtype: "Beast",
        set: "WAR",
        rules: "Raging Kronch can’t attack alone.",
        flavor: "\"Seeing so much easy prey makes her crazy. See how she snorts and drools?\" —Dhuuz, kronch wrangler",
        power: 4,
        toughness: 3
    }
    commonRunA[11] = {
        name: "Gideon's Sacrifice",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460941&type=card",
		priority: 5,
        cmc: "W",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Choose a creature or planeswalker you control. All damage that would be dealt this turn to you and permanents you control is dealt to the chosen permanent instead (if it’s still on the battlefield).",
        flavor: "To Liliana’s surprise, the cost of betraying Bolas did not fall on her.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[12] = {
        name: "Teferi's Time Twist",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460999&type=card",
		priority: 39,
        cmc: "1U",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Exile target permanent you control. Return that card to the battlefield under its owner’s control at the beginning of the next end step. If it enters the battlefield as a creature, it enters with an additional +1/+1 counter on it.",
        flavor: "\"The safest place for you is not now.\"",
        power: undefined,
        toughness: undefined
    }
    commonRunA[13] = {
        name: "Grim Initiate",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461057&type=card",
		priority: 54,
        cmc: "R",
        type: "Creature",
        subtype: "Zombie Warrior",
        set: "WAR",
        rules: "First strike. When Grim Initiate dies, amass 1. (Put a +1/+1 counter on an Army you control. If you don’t control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "Beneath each gleaming mineral shell rots a once-proud warrior of Amonkhet.",
        power: 1,
        toughness: 1
    }
    commonRunA[14] = {
        name: "Martyr for the Cause",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460950&type=card",
		priority: 108,
        cmc: "1W",
        type: "Creature",
        subtype: "Human Soldier",
        set: "WAR",
        rules: "When Martyr for the Cause dies, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
        flavor: "\"If I am to die in service, there is no more worthy fight than this.\"",
        power: 2,
        toughness: 2
    }
    commonRunA[15] = {
        name: "Contentious Plan",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460973&type=card",
		priority: 62,
        cmc: "1U",
        type: "Sorcery",
        subtype: undefined,
        set: "WAR",
        rules: "Proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
        flavor: "Niv-Mizzet had perfected a plan, but he had no control over the mortal minds who had to agree to implement it.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[16] = {
        name: "Blindblast",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461041&type=card",
		priority: 21,
        cmc: "2R",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Blindblast deals 1 damage to target creature. That creature can't block this turn. Draw a card.",
        flavor: "\"Peril is in the eye of the beholder. At least, if your aim is good.\"—Jaya Ballard",
        power: undefined,
        toughness: undefined
    }
    commonRunA[17] = {
        name: "Battlefield Promotion",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460932&type=card",
		priority: 77,
        cmc: "1W",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Put a +1/+1 counter on target creature. That creature gains first strike until end of turn. You gain 2 life.",
        flavor: "\"Welcome to the Legion. You saved a district—now let's go save the world.\"",
        power: undefined,
        toughness: undefined
    }
    commonRunA[18] = {
        name: "Crush Dissent",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460974&type=card",
		priority: 35,
        cmc: "3U",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Counter target spell unless its controller pays 2. Amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "\"All I ask is complete obedience.\" — Nicol Bolas",
        power: undefined,
        toughness: undefined
    }
    commonRunA[19] = {
        name: "Chainwhip Cyclops",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461045&type=card",
		priority: 78,
        cmc: "4R",
        type: "Creature",
        subtype: "Cyclops Warrior",
        set: "WAR",
        rules: "3R: Target creature can't block this turn.",
        flavor: "\"You say this Tenth District, not Rubblebelt. But where smash happen, that Rubblebelt. Rubblebelt state of mind.\" — Urgdar, cyclops philosopher",
        power: 4,
        toughness: 4
    }
    commonRunA[20] = {
        name: "Teyo's Lightshield",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460960&type=card",
		priority: 64,
        cmc: "2W",
        type: "Creature",
        subtype: "Illusion",
        set: "WAR",
        rules: "When Teyo's Lightshield enters the battlefield, put a +1/+1 counter on target creature you control.",
        flavor: "Teyo gifted his shields to as many allies as possible, knowing he could not always be there to protect them himself.",
        power: 0,
        toughness: 3
    }
    commonRunA[21] = {
        name: "No Escape",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460990&type=card",
		priority: 83,
        cmc: "2U",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Counter target creature or planeswalker spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard. Scry 1.",
        flavor: "Jace surmised that they were walking into Bolas's trap. He felt no joy in being right.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[22] = {
        name: "Turret Ogre",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461075&type=card",
		priority: 140,
        cmc: "3R",
        type: "Creature",
        subtype: "Ogre Warrior",
        set: "WAR",
        rules: "Reach. When Turret Ogre enters the battlefield, if you control another creature with power 4 or greater, Turret Ogre deals 2 damage to each opponent.",
        flavor: "Common Gruul career aspirations: berserker, shaman, catapult.",
        power: 4,
        toughness: 3
    }
    commonRunA[23] = {
        name: "Ironclad Krovod",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460946&type=card",
		priority: 36,
        cmc: "3W",
        type: "Creature",
        subtype: "Beast",
        set: "WAR",
        rules: undefined,
        flavor: "\"We need to block the exits from the plaza! What's big, heavy, and available?\" — Gideon Jura",
        power: 2,
        toughness: 5
    }
    commonRunA[24] = {
        name: "Ashiok's Skulker",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460967&type=card",
		priority: 58,
        cmc: "5U",
        type: "Creature",
        subtype: "Nightmare",
        set: "WAR",
        rules: "Pat 3U: Ashiok’s Skulker can’t be blocked this turn.",
        flavor: "\"Fear writhes and whispers in the shadows of your mind. It is the enemy you always knew would come.\" —Ashiok",
        power: 3,
        toughness: 5
    }
    commonRunA[25] = {
        name: "Honor the God-Pharaoh",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461059&type=card",
		priority: 49,
        cmc: "2R",
        type: "Sorcery",
        subtype: undefined,
        set: "WAR",
        rules: "As an additional cost to cast this spell, discard a card. Draw two cards. Amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "In life, they revered a diverse pantheon of gods. Now they revere only the God-Pharaoh.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[26] = {
        name: "Rising Populace",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460956&type=card",
		priority: 97,
        cmc: "2W",
        type: "Creature",
        subtype: "Human",
        set: "WAR",
        rules: "Whenever another creature or planeswalker you control dies, put a +1/+1 counter on Rising Populace.",
        flavor: "Grief is a crucible where resolve is tempered.",
        power: 2,
        toughness: 2
    }
    commonRunA[27] = {
        name: "Stealth Mission",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460997&type=card",
		priority: 50,
        cmc: "2U",
        type: "Sorcery",
        subtype: undefined,
        set: "WAR",
        rules: "Put two +1/+1 counters on target creature you control. That creature can't be blocked this turn.",
        flavor: "\"What they don't know will definitely hurt them.\" — Lazav",
        power: undefined,
        toughness: undefined
    }
    commonRunA[28] = {
        name: "Goblin Assault Team",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461056&type=card",
		priority: 42,
        cmc: "3R",
        type: "Creature",
        subtype: "Goblin Warrior",
        set: "WAR",
        rules: "Haste. When Goblin Assault Team dies, put a +1/+1 counter on target creature you control.",
        flavor: "Under the veneer of the various guilds, each goblin has the same basic need: to run screaming at the enemy and hit a bunch of stuff.",
        power: 4,
        toughness: 1
    }
    commonRunA[29] = {
        name: "Pouncing Lynx",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460952&type=card",
		priority: 103,
        cmc: "1W",
        type: "Creature",
        subtype: "Cat",
        set: "WAR",
        rules: "As long as it's your turn, Pouncing Lynx has first strike.",
        flavor: "\"I don't understand. He's normally so well behaved!\"",
        power: 2,
        toughness: 1
    }
    commonRunA[30] = {
        name: "Sky Theater Strix",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460994&type=card",
		priority: 121,
        cmc: "1U",
        type: "Creature",
        subtype: "Bird",
        set: "WAR",
        rules: "Flying. Whenever you cast a noncreature spell, Sky Theater Strix gets +1/+0 until end of turn.",
        flavor: "Courier owls joined the fray, attacking the Dreadhorde with a viciousness usually reserved for mail thieves.",
        power: 1,
        toughness: 2
    }
    commonRunA[31] = {
        name: "Goblin Assailant",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461055&type=card",
		priority: 23,
        cmc: "1R",
        type: "Creature",
        subtype: "Goblin Warrior",
        set: "WAR",
        rules: undefined,
        flavor: "What he lacks in patience, intelligence, empathy, lucidity, hygiene, ability to follow orders, self-regard, and discernible skills, he makes up for in sheer chaotic violence.",
        power: 2,
        toughness: 2
    }
    commonRunA[32] = {
        name: "Makeshift Battalion",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460949&type=card",
		priority: 72,
        cmc: "2W",
        type: "Creature",
        subtype: "Human Soldier",
        set: "WAR",
        rules: "Whenever Makeshift Battalion and at least two other creatures attack, put a +1/+1 counter on Makeshift Battalion.",
        flavor: "Their ranks are thin, their formation is improvised, their weapons are borrowed, and you'd best get out of their way.",
        power: 3,
        toughness: 2
    }
	    commonRunA[33] = {
        name: "Kasmina's Transmutation",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460984&type=card",
		priority: 91,
        cmc: "1U",
        type: "Enchantment",
        subtype: "Aura",
        set: "WAR",
        rules: "Enchant creature. Enchanted creature loses all abilities and has base power and toughness 1/1.",
        flavor: "\"Hop away now, little Eternal. Go eat some flies.\" — Kasmina",
        power: undefined,
        toughness: undefined
    }
    commonRunA[34] = {
        name: "Samut's Sprint",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461069&type=card",
		priority: 28,
        cmc: "R",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Target creature gets +2/+1 and gains haste until end of turn. Scry 1.",
        flavor: "Samut's war was intensely personal. Every hour she faced enemies she once loved as friends and horrors she once revered as gods.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[35] = {
        name: "War Screecher",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460966&type=card",
		priority: 98,
        cmc: "1W",
        type: "Creature",
        subtype: "Bird",
        set: "WAR",
        rules: "Flying. Pay 5W, and tap: Other creatures you control get +1/+1 until end of turn.",
        flavor: "Soaring over Vitu-Ghazi, New Prahv, and Orzhova, the Conclave’s trained falcons provided critical intelligence.",
        power: 1,
        toughness: 3
    }
    commonRunA[36] = {
        name: "Teferi's Time Twist",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460999&type=card",
		priority: 39,
        cmc: "1U",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Exile target permanent you control. Return that card to the battlefield under its owner’s control at the beginning of the next end step. If it enters the battlefield as a creature, it enters with an additional +1/+1 counter on it.",
        flavor: "\"The safest place for you is not now.\"",
        power: undefined,
        toughness: undefined
    }
    commonRunA[37] = {
        name: "Ahn-Crop Invader",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461040&type=card",
        priority: 87,
		cmc: "2R",
        type: "Creature",
        subtype: "Zombie Minotaur Warrior",
        set: "WAR",
        rules: "As long as it’s your turn, Ahn-Crop Invader has first strike. Pay 1, Sacrifice another creature: Ahn-Crop Invader gets +2/+0 until end of turn.",
        flavor: "\"Give me a crew like this one and I’d rule any sea I sailed.\" —Angrath",
        power: 2,
        toughness: 2
    }
    commonRunA[38] = {
        name: "Bulwark Giant",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460934&type=card",
		priority: 26,
        cmc: "5W",
        type: "Creature",
        subtype: "Giant Soldier",
        set: "WAR",
        rules: "When Bulwark Giant enters the battlefield, you gain 5 life.",
        flavor: "\"Where did she come from? More importantly, are there more like her?\" —Gideon Jura",
        power: 3,
        toughness: 6
    }
    commonRunA[39] = {
        name: "Crush Dissent",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460974&type=card",
		priority: 35,
        cmc: "3U",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Counter target spell unless its controller pays 2. Amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "\"All I ask is complete obedience.\" — Nicol Bolas",
        power: undefined,
        toughness: undefined
    }
    commonRunA[40] = {
        name: "Invading Manticore",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461061&type=card",
		priority: 65,
        cmc: "5R",
        type: "Creature",
        subtype: "Zombie Manticore",
        set: "WAR",
        rules: "When Invading Manticore enters the battlefield, amass 2. (Put two +1/+1 counters on an Army you control. If you don’t control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "\"Fall back! You are no match for this.\" —Samut",
        power: 4,
        toughness: 5
    }
    commonRunA[41] = {
        name: "Gideon's Sacrifice",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460941&type=card",
		priority: 5,
        cmc: "W",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Choose a creature or planeswalker you control. All damage that would be dealt this turn to you and permanents you control is dealt to the chosen permanent instead (if it’s still on the battlefield).",
        flavor: "To Liliana’s surprise, the cost of betraying Bolas did not fall on her.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[42] = {
        name: "Naga Eternal",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460987&type=card",
		priority: 56,
        cmc: "2U",
        type: "Creature",
        subtype: "Zombie Naga",
        set: "WAR",
        rules: undefined,
        flavor: "\"I recognize that headdress. This one was feared even by her fellow initiates.\" — Samut",
        power: 3,
        toughness: 2
    }
    commonRunA[43] = {
        name: "Raging Kronch",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461068&type=card",
		priority: 147,
        cmc: "2R",
        type: "Creature",
        subtype: "Beast",
        set: "WAR",
        rules: "Raging Kronch can’t attack alone.",
        flavor: "\"Seeing so much easy prey makes her crazy. See how she snorts and drools?\" —Dhuuz, kronch wrangler",
        power: 4,
        toughness: 3
    }
    commonRunA[44] = {
        name: "Battlefield Promotion",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460932&type=card",
		priority: 77,
        cmc: "1W",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Put a +1/+1 counter on target creature. That creature gains first strike until end of turn. You gain 2 life.",
        flavor: "\"Welcome to the Legion. You saved a district—now let's go save the world.\"",
        power: undefined,
        toughness: undefined
    }
    commonRunA[45] = {
        name: "Sky Theater Strix",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460994&type=card",
		priority: 121,
        cmc: "1U",
        type: "Creature",
        subtype: "Bird",
        set: "WAR",
        rules: "Flying. Whenever you cast a noncreature spell, Sky Theater Strix gets +1/+0 until end of turn.",
        flavor: "Courier owls joined the fray, attacking the Dreadhorde with a viciousness usually reserved for mail thieves.",
        power: 1,
        toughness: 2
    }
    commonRunA[46] = {
        name: "Ahn-Crop Invader",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461040&type=card",
		priority: 87,
        cmc: "2R",
        type: "Creature",
        subtype: "Zombie Minotaur Warrior",
        set: "WAR",
        rules: "As long as it’s your turn, Ahn-Crop Invader has first strike. Pay 1, Sacrifice another creature: Ahn-Crop Invader gets +2/+0 until end of turn.",
        flavor: "\"Give me a crew like this one and I’d rule any sea I sailed.\" —Angrath",
        power: 2,
        toughness: 2
    }
    commonRunA[47] = {
        name: "Blindblast",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461041&type=card",
		priority: 21,
        cmc: "2R",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Blindblast deals 1 damage to target creature. That creature can't block this turn. Draw a card.",
        flavor: "\"Peril is in the eye of the beholder. At least, if your aim is good.\"—Jaya Ballard",
        power: undefined,
        toughness: undefined
    }
    commonRunA[48] = {
        name: "Loxodon Sergeant",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460948&type=card",
		priority: 47,
        cmc: "3W",
        type: "Creature",
        subtype: "Elephant Soldier",
        set: "WAR",
        rules: "Vigilance. When Loxodon Sergeant enters the battlefield, other creatures you control gain vigilance until end of turn.",
        flavor: "His voice is both war horn and rallying cry, a trumpeting call that stirs even the faintest heart.",
        power: 3,
        toughness: 3
    }
    commonRunA[49] = {
        name: "Kiora's Dambreaker",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460985&type=card",
		priority: 59,
        cmc: "5U",
        type: "Creature",
        subtype: "Leviathan",
        set: "WAR",
        rules: "When Kiora’s Dambreaker enters the battlefield, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
        flavor: "\"When your enemy flees, send the sea to pursue them.\" —Kiora",
        power: 5,
        toughness: 6
    }
    commonRunA[50] = {
        name: "Chainwhip Cyclops",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461045&type=card",
		priority: 78,
        cmc: "4R",
        type: "Creature",
        subtype: "Cyclops Warrior",
        set: "WAR",
        rules: "3R: Target creature can't block this turn.",
        flavor: "\"You say this Tenth District, not Rubblebelt. But where smash happen, that Rubblebelt. Rubblebelt state of mind.\" — Urgdar, cyclops philosopher",
        power: 4,
        toughness: 4
    }
    commonRunA[51] = {
        name: "Teyo's Lightshield",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460960&type=card",
		priority: 64,
        cmc: "2W",
        type: "Creature",
        subtype: "Illusion",
        set: "WAR",
        rules: "When Teyo's Lightshield enters the battlefield, put a +1/+1 counter on target creature you control.",
        flavor: "Teyo gifted his shields to as many allies as possible, knowing he could not always be there to protect them himself.",
        power: 0,
        toughness: 3
    }
    commonRunA[52] = {
        name: "Spellkeeper Weird",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460996&type=card",
		priority: 115,
        cmc: "2U",
        type: "Creature",
        subtype: "Weird",
        set: "WAR",
        rules: "Pay 2 mana, tap, and Sacrifice Spellkeeper Weird: Return target instant or sorcery card from your graveyard to your hand.",
        flavor: "They worked well as a team, but they knew it couldn’t last forever.",
        power: 1,
        toughness: 4
    }
    commonRunA[53] = {
        name: "Turret Ogre",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461075&type=card",
		priority: 140,
        cmc: "3R",
        type: "Creature",
        subtype: "Ogre Warrior",
        set: "WAR",
        rules: "Reach. When Turret Ogre enters the battlefield, if you control another creature with power 4 or greater, Turret Ogre deals 2 damage to each opponent.",
        flavor: "Common Gruul career aspirations: berserker, shaman, catapult.",
        power: 4,
        toughness: 3
    }
    commonRunA[54] = {
        name: "Pouncing Lynx",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460952&type=card",
		priority: 103,
        cmc: "1W",
        type: "Creature",
        subtype: "Cat",
        set: "WAR",
        rules: "As long as it's your turn, Pouncing Lynx has first strike.",
        flavor: "\"I don't understand. He's normally so well behaved!\"",
        power: 2,
        toughness: 1
    }
    commonRunA[55] = {
        name: "Stealth Mission",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460997&type=card",
		priority: 50,
        cmc: "2U",
        type: "Sorcery",
        subtype: undefined,
        set: "WAR",
        rules: "Put two +1/+1 counters on target creature you control. That creature can't be blocked this turn.",
        flavor: "\"What they don't know will definitely hurt them.\" — Lazav",
        power: undefined,
        toughness: undefined
    }
    commonRunA[56] = {
        name: "Honor the God-Pharaoh",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461059&type=card",
		priority: 49,
        cmc: "2R",
        type: "Sorcery",
        subtype: undefined,
        set: "WAR",
        rules: "As an additional cost to cast this spell, discard a card. Draw two cards. Amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "In life, they revered a diverse pantheon of gods. Now they revere only the God-Pharaoh.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[57] = {
        name: "Rising Populace",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460956&type=card",
		priority: 97,
        cmc: "2W",
        type: "Creature",
        subtype: "Human",
        set: "WAR",
        rules: "Whenever another creature or planeswalker you control dies, put a +1/+1 counter on Rising Populace.",
        flavor: "Grief is a crucible where resolve is tempered.",
        power: 2,
        toughness: 2
    }
    commonRunA[58] = {
        name: "No Escape",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460990&type=card",
		priority: 83,
        cmc: "2U",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Counter target creature or planeswalker spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard. Scry 1.",
        flavor: "Jace surmised that they were walking into Bolas's trap. He felt no joy in being right.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[59] = {
        name: "Grim Initiate",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461057&type=card",
		priority: 54,
        cmc: "R",
        type: "Creature",
        subtype: "Zombie Warrior",
        set: "WAR",
        rules: "First strike. When Grim Initiate dies, amass 1. (Put a +1/+1 counter on an Army you control. If you don’t control one, create a 0/0 black Zombie Army creature token first.)",
        flavor: "Beneath each gleaming mineral shell rots a once-proud warrior of Amonkhet.",
        power: 1,
        toughness: 1
    }
    commonRunA[60] = {
        name: "Makeshift Battalion",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460949&type=card",
		priority: 72,
        cmc: "2W",
        type: "Creature",
        subtype: "Human Soldier",
        set: "WAR",
        rules: "Whenever Makeshift Battalion and at least two other creatures attack, put a +1/+1 counter on Makeshift Battalion.",
        flavor: "Their ranks are thin, their formation is improvised, their weapons are borrowed, and you'd best get out of their way.",
        power: 3,
        toughness: 2
    }
    commonRunA[61] = {
        name: "Contentious Plan",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460973&type=card",
		priority: 62,
        cmc: "1U",
        type: "Sorcery",
        subtype: undefined,
        set: "WAR",
        rules: "Proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
        flavor: "Niv-Mizzet had perfected a plan, but he had no control over the mortal minds who had to agree to implement it.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[62] = {
        name: "Samut's Sprint",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461069&type=card",
		priority: 28,
        cmc: "R",
        type: "Instant",
        subtype: undefined,
        set: "WAR",
        rules: "Target creature gets +2/+1 and gains haste until end of turn. Scry 1.",
        flavor: "Samut's war was intensely personal. Every hour she faced enemies she once loved as friends and horrors she once revered as gods.",
        power: undefined,
        toughness: undefined
    }
    commonRunA[63] = {
        name: "Martyr for the Cause",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460950&type=card",
		priority: 108,
        cmc: "1W",
        type: "Creature",
        subtype: "Human Soldier",
        set: "WAR",
        rules: "When Martyr for the Cause dies, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
        flavor: "\"If I am to die in service, there is no more worthy fight than this.\"",
        power: 2,
        toughness: 2
    }
    commonRunA[64] = {
        name: "Naga Eternal",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460987&type=card",
		priority: 56,
        cmc: "2U",
        type: "Creature",
        subtype: "Zombie Naga",
        set: "WAR",
        rules: undefined,
        flavor: "\"I recognize that headdress. This one was feared even by her fellow initiates.\" — Samut",
        power: 3,
        toughness: 2
    }
    commonRunA[65] = {
        name: "Goblin Assailant",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461055&type=card",
		priority: 23,
        cmc: "1R",
        type: "Creature",
        subtype: "Goblin Warrior",
        set: "WAR",
        rules: undefined,
        flavor: "What he lacks in patience, intelligence, empathy, lucidity, hygiene, ability to follow orders, self-regard, and discernible skills, he makes up for in sheer chaotic violence.",
        power: 2,
        toughness: 2
    }
    commonRunA[66] = {
        name: "Loxodon Sergeant",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460948&type=card",
		priority: 47,
        cmc: "3W",
        type: "Creature",
        subtype: "Elephant Soldier",
        set: "WAR",
        rules: "Vigilance. When Loxodon Sergeant enters the battlefield, other creatures you control gain vigilance until end of turn.",
        flavor: "His voice is both war horn and rallying cry, a trumpeting call that stirs even the faintest heart.",
        power: 3,
        toughness: 3
    }
