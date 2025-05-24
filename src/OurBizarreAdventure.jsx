import React, { useState } from "react";
const standData = [
  {
    name: "SWEET TEMPO",
    ability: "Turns every word into a love note",
    power: "B",
    speed: "A",
    range: "Unlimited",
    durability: "C",
    quote: "Yare yare, I miss you… 💖",
  },
  {
    name: "HEART BEAT OVERDRIVE",
    ability: "Lets the user send a heartbeat across any distance",
    power: "A",
    speed: "B",
    range: "Infinite",
    durability: "B",
    quote: "Even time can't stop my feelings for you.",
  },
  {
    name: "KISS STREAM",
    ability: "Creates illusions of kisses to comfort the heart",
    power: "C",
    speed: "A",
    range: "Long",
    durability: "D",
    quote: "Muah 💋 teleporting straight to your soul.",
  },
  // --- 97 more stands below ---
  {
    name: "STAR PLATINUM",
    ability: "Incredible strength and precision",
    power: "A",
    speed: "A",
    range: "C",
    durability: "A",
    quote: "ORA ORA ORA!",
  },
  {
    name: "THE WORLD",
    ability: "Stops time for a brief moment",
    power: "A",
    speed: "A",
    range: "C",
    durability: "A",
    quote: "Za Warudo! Toki wo tomare!",
  },
  {
    name: "CRAZY DIAMOND",
    ability: "Restores objects and people to their original state",
    power: "A",
    speed: "A",
    range: "C",
    durability: "A",
    quote: "DORARARARA!",
  },
  {
    name: "GOLD EXPERIENCE",
    ability: "Gives life to objects",
    power: "A",
    speed: "A",
    range: "C",
    durability: "A",
    quote: "Life, spring forth!",
  },
  {
    name: "SILVER CHARIOT",
    ability: "Extreme speed and swordsmanship",
    power: "B",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "En garde!",
  },
  {
    name: "MAGICIAN'S RED",
    ability: "Manipulates fire",
    power: "A",
    speed: "B",
    range: "C",
    durability: "B",
    quote: "Red Bind!",
  },
  {
    name: "HIEROPHANT GREEN",
    ability: "Emerald Splash attack",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Emerald Splash!",
  },
  {
    name: "HERMIT PURPLE",
    ability: "Spirit photography and divination",
    power: "D",
    speed: "C",
    range: "B",
    durability: "B",
    quote: "My Stand can reveal the truth!",
  },
  {
    name: "THE FOOL",
    ability: "Manipulates sand",
    power: "B",
    speed: "C",
    range: "B",
    durability: "A",
    quote: "A Stand made of sand!",
  },
  {
    name: "KILLER QUEEN",
    ability: "Turns anything into a bomb",
    power: "A",
    speed: "B",
    range: "C",
    durability: "A",
    quote: "Bites the Dust!",
  },
  {
    name: "BITE THE DUST",
    ability: "Time reversal bomb",
    power: "A",
    speed: "A",
    range: "C",
    durability: "A",
    quote: "Time rewinds!",
  },
  {
    name: "ECHOES ACT 3",
    ability: "Increases gravity on targets",
    power: "A",
    speed: "B",
    range: "C",
    durability: "B",
    quote: "S-H-I-T!",
  },
  {
    name: "HEAVEN'S DOOR",
    ability: "Turns people into books",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "You can't attack me!",
  },
  {
    name: "STONE FREE",
    ability: "Turns body into string",
    power: "A",
    speed: "A",
    range: "B",
    durability: "A",
    quote: "Stone Free!",
  },
  {
    name: "WEATHER REPORT",
    ability: "Controls the weather",
    power: "A",
    speed: "B",
    range: "A",
    durability: "A",
    quote: "Heavy Weather!",
  },
  {
    name: "MADE IN HEAVEN",
    ability: "Accelerates time",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "The universe resets!",
  },
  {
    name: "D4C",
    ability: "Travels between dimensions",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Love Train!",
  },
  {
    name: "TUSK ACT 4",
    ability: "Infinite rotation",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Infinite Spin!",
  },
  {
    name: "SOFT & WET",
    ability: "Steals properties from objects",
    power: "B",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Plunder!",
  },
  {
    name: "NUT KING CALL",
    ability: "Unscrews anything",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Unscrew!",
  },
  {
    name: "PAPER MOON KING",
    ability: "Creates illusions",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Illusions everywhere!",
  },
  {
    name: "SCARY MONSTERS",
    ability: "Turns into a dinosaur",
    power: "A",
    speed: "A",
    range: "B",
    durability: "A",
    quote: "Dino power!",
  },
  {
    name: "CINDERELLA",
    ability: "Changes appearance",
    power: "C",
    speed: "B",
    range: "B",
    durability: "C",
    quote: "A new face!",
  },
  {
    name: "SURVIVOR",
    ability: "Enrages people",
    power: "D",
    speed: "C",
    range: "A",
    durability: "B",
    quote: "Let the rage flow!",
  },
  {
    name: "WHITE ALBUM",
    ability: "Absolute zero ice armor",
    power: "A",
    speed: "B",
    range: "C",
    durability: "A",
    quote: "Gently Weeps!",
  },
  {
    name: "KING CRIMSON",
    ability: "Erases time",
    power: "A",
    speed: "A",
    range: "B",
    durability: "A",
    quote: "It just works.",
  },
  {
    name: "METALLICA",
    ability: "Manipulates iron",
    power: "B",
    speed: "B",
    range: "C",
    durability: "B",
    quote: "Iron control!",
  },
  {
    name: "SEX PISTOLS",
    ability: "Controls bullets",
    power: "C",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Bullet time!",
  },
  {
    name: "SPICE GIRL",
    ability: "Softens objects",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Wanna be soft!",
  },
  {
    name: "BLACK SABBATH",
    ability: "Attacks shadows",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Shadow strike!",
  },
  {
    name: "GREEN DAY",
    ability: "Spreads mold",
    power: "A",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Mold attack!",
  },
  {
    name: "OASIS",
    ability: "Liquefies ground",
    power: "A",
    speed: "B",
    range: "B",
    durability: "A",
    quote: "Muda muda muda!",
  },
  {
    name: "GRATEFUL DEAD",
    ability: "Ages people",
    power: "A",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Feel old yet?",
  },
  {
    name: "BABY FACE",
    ability: "Creates homunculi",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Mini me!",
  },
  {
    name: "WHITE SNAKE",
    ability: "Steals memories and Stands",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "DISC!",
  },
  {
    name: "C-MOON",
    ability: "Inverts gravity",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Gravity shift!",
  },
  {
    name: "ENIGMA",
    ability: "Seals things in paper",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Paper trap!",
  },
  {
    name: "HIGHWAY STAR",
    ability: "Tracks targets and drains nutrients",
    power: "B",
    speed: "A",
    range: "A",
    durability: "B",
    quote: "You can't escape!",
  },
  {
    name: "RAT",
    ability: "Melts targets",
    power: "B",
    speed: "C",
    range: "B",
    durability: "B",
    quote: "Melting shot!",
  },
  {
    name: "AQUA NECKLACE",
    ability: "Turns into water",
    power: "C",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Water form!",
  },
  {
    name: "RED HOT CHILI PEPPER",
    ability: "Manipulates electricity",
    power: "A",
    speed: "A",
    range: "A",
    durability: "B",
    quote: "Electric shock!",
  },
  {
    name: "ACT 1",
    ability: "Sound-based attacks",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Echoes!",
  },
  {
    name: "ACT 2",
    ability: "Sound-based attacks",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Echoes again!",
  },
  {
    name: "ACT 3",
    ability: "Gravity-based attacks",
    power: "A",
    speed: "B",
    range: "C",
    durability: "B",
    quote: "S-H-I-T!",
  },
  {
    name: "BAD COMPANY",
    ability: "Miniature army",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Fire!",
  },
  {
    name: "THE HAND",
    ability: "Erases space",
    power: "A",
    speed: "B",
    range: "C",
    durability: "B",
    quote: "Zaa Hando!",
  },
  {
    name: "LOVE DELUXE",
    ability: "Manipulates hair",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Hair whip!",
  },
  {
    name: "PEARL JAM",
    ability: "Heals through food",
    power: "C",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Delicious healing!",
  },
  {
    name: "CINDERELLA",
    ability: "Changes appearance",
    power: "C",
    speed: "B",
    range: "B",
    durability: "C",
    quote: "A new face!",
  },
  {
    name: "BOY II MAN",
    ability: "Steals Stands via rock-paper-scissors",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Rock, paper, scissors!",
  },
  {
    name: "RATT",
    ability: "Melts targets",
    power: "B",
    speed: "C",
    range: "B",
    durability: "B",
    quote: "Melting shot!",
  },
  {
    name: "SURFACE",
    ability: "Creates a doppelganger",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Copycat!",
  },
  {
    name: "HIGH PRIESTESS",
    ability: "Mimics minerals",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Mineral mimic!",
  },
  {
    name: "EBONY DEVIL",
    ability: "Possesses objects",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Possession!",
  },
  {
    name: "YELLOW TEMPERANCE",
    ability: "Consumes and mimics",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Consume and copy!",
  },
  {
    name: "HANGED MAN",
    ability: "Attacks through reflections",
    power: "B",
    speed: "A",
    range: "A",
    durability: "B",
    quote: "Reflection attack!",
  },
  {
    name: "EMPEROR",
    ability: "Gun Stand",
    power: "B",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Bang!",
  },
  {
    name: "EMPRESS",
    ability: "Flesh growth",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Flesh attack!",
  },
  {
    name: "WHEEL OF FORTUNE",
    ability: "Transforms into any car",
    power: "B",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Vroom vroom!",
  },
  {
    name: "JUSTICE",
    ability: "Creates illusions",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Illusion mist!",
  },
  {
    name: "LOVERS",
    ability: "Microscopic Stand",
    power: "D",
    speed: "A",
    range: "A",
    durability: "B",
    quote: "Tiny terror!",
  },
  {
    name: "SUN",
    ability: "Creates intense heat",
    power: "A",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Scorching sun!",
  },
  {
    name: "DEATH THIRTEEN",
    ability: "Controls dreams",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Dream world!",
  },
  {
    name: "JUDGMENT",
    ability: "Grants wishes",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Wish granted!",
  },
  {
    name: "HIGH VOLTAGE",
    ability: "Electric attacks",
    power: "A",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "High voltage!",
  },
  {
    name: "ATUM",
    ability: "Reads minds",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Mind reader!",
  },
  {
    name: "OSIRIS",
    ability: "Steals souls",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Soul steal!",
  },
  {
    name: "SET",
    ability: "Controls electricity",
    power: "A",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Electric surge!",
  },
  {
    name: "TENORE SAX",
    ability: "Controls fog",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Fog attack!",
  },
  {
    name: "ANUBIS",
    ability: "Possesses swords",
    power: "B",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Sword master!",
  },
  {
    name: "BASTET",
    ability: "Magnetizes targets",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Magnetism!",
  },
  {
    name: "SETTINGS SUN",
    ability: "Creates mirages",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Mirage world!",
  },
  {
    name: "HORUS",
    ability: "Controls ice",
    power: "A",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Ice age!",
  },
  {
    name: "GEB",
    ability: "Controls water",
    power: "B",
    speed: "B",
    range: "A",
    durability: "B",
    quote: "Water strike!",
  },
  {
    name: "THOTH",
    ability: "Predicts the future",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Future sight!",
  },
  {
    name: "BURNING DOWN THE HOUSE",
    ability: "Creates a hidden room",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Secret base!",
  },
  {
    name: "DRAGON'S DREAM",
    ability: "Predicts luck",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Lucky charm!",
  },
  {
    name: "YO-YO MA",
    ability: "Annoying attacks",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Annoying bug!",
  },
  {
    name: "GREEN GREEN GRASS OF HOME",
    ability: "Shrinks targets",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Shrink ray!",
  },
  {
    name: "BOHEMIAN RHAPSODY",
    ability: "Brings fiction to life",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Fiction becomes reality!",
  },
  {
    name: "SKY HIGH",
    ability: "Controls rods",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Rod control!",
  },
  {
    name: "UNDER WORLD",
    ability: "Recreates past events",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Past returns!",
  },
  {
    name: "BORN THIS WAY",
    ability: "Freezes targets",
    power: "B",
    speed: "A",
    range: "B",
    durability: "B",
    quote: "Freeze!",
  },
  {
    name: "DOGGYSTYLE",
    ability: "Unzips body parts",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Unzip!",
  },
  {
    name: "I AM A ROCK",
    ability: "Creates barriers",
    power: "B",
    speed: "B",
    range: "B",
    durability: "A",
    quote: "Rock solid!",
  },
  {
    name: "KING NOTHING",
    ability: "Tracks scents",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Scent tracker!",
  },
  {
    name: "FUN FUN FUN",
    ability: "Controls limbs",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Puppet master!",
  },
  {
    name: "LOVE TRAIN",
    ability: "Redirects misfortune",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Good luck only!",
  },
  {
    name: "TUSK ACT 1",
    ability: "Spin nails",
    power: "C",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Spin shot!",
  },
  {
    name: "TUSK ACT 2",
    ability: "Spin nails with wormholes",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Wormhole spin!",
  },
  {
    name: "TUSK ACT 3",
    ability: "Spin nails with infinite rotation",
    power: "A",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Infinite spin!",
  },
  {
    name: "DIVER DOWN",
    ability: "Phases through objects",
    power: "B",
    speed: "B",
    range: "B",
    durability: "B",
    quote: "Phase shift!",
  },
  {
    name: "WEATHER FORECAST",
    ability: "Controls weather",
    power: "A",
    speed: "B",
    range: "A",
    durability: "A",
    quote: "Weather change!",
  },
  {
    name: "PLATINUM HEART",
    ability: "Protects love with unbreakable will",
    power: "A",
    speed: "A",
    range: "B",
    durability: "S",
    quote: "Nothing can break our bond!",
  },
  {
    name: "ETERNAL BOND",
    ability: "Keeps two hearts connected no matter the distance",
    power: "∞",
    speed: "A",
    range: "Infinite",
    durability: "S",
    quote: "No Stand or enemy can break our connection. Happy 3rd monthsary!",
  },
  {
    name: "LOVELY DAYS",
    ability: "Makes every day feel special",
    power: "B",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Every day is a lovely day with you.",
  },
  {
    name: "HEARTFUL DRIVE",
    ability: "Empowers with love and courage",
    power: "A",
    speed: "A",
    range: "B",
    durability: "A",
    quote: "Fueled by love!",
  },
  {
    name: "SOUL SYMPHONY",
    ability: "Synchronizes emotions",
    power: "B",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "Our hearts beat as one.",
  },
  {
    name: "MEMORY LANE",
    ability: "Replays precious memories",
    power: "C",
    speed: "B",
    range: "A",
    durability: "A",
    quote: "Let's relive our best moments.",
  },
  {
    name: "LUCKY STAR",
    ability: "Brings good fortune to loved ones",
    power: "B",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "You're my lucky star.",
  },
  {
    name: "GOLDEN HOUR",
    ability: "Freezes the best moments in time",
    power: "A",
    speed: "B",
    range: "A",
    durability: "A",
    quote: "Let's make this moment last forever.",
  },
  {
    name: "SHINING SOUL",
    ability: "Radiates positivity and hope",
    power: "B",
    speed: "A",
    range: "A",
    durability: "A",
    quote: "You light up my world.",
  },
  {
    name: "DREAM CATCHER",
    ability: "Protects dreams and wishes",
    power: "C",
    speed: "B",
    range: "A",
    durability: "A",
    quote: "I'll keep your dreams safe.",
  },
  {
    name: "HEART LINK",
    ability: "Connects feelings instantly",
    power: "B",
    speed: "A",
    range: "Infinite",
    durability: "A",
    quote: "No matter where, we're always together.",
  },
  {
    name: "BIZARRE LOVE",
    ability: "Makes love stronger through every challenge",
    power: "A",
    speed: "A",
    range: "A",
    durability: "S",
    quote: "Our love is truly bizarre and unbreakable.",
  },
];

const getRandomStand = () => {
  return standData[Math.floor(Math.random() * standData.length)];
};

const OurBizarreAdventure = () => {
  const [stand, setStand] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 relative"
      style={{
        background: `
          linear-gradient(rgba(29, 27, 75, 0.7), rgba(109, 40, 217, 0.7)),
          url('/jjba.jpeg') center center / cover no-repeat
        `,
        fontFamily: "'Bangers', 'Luckiest Guy', cursive, sans-serif",
        letterSpacing: "2px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* JJBA SFX */}
      <div
        className="absolute top-2 left-2 sm:top-4 sm:left-4 text-yellow-400 text-3xl sm:text-5xl opacity-40 select-none pointer-events-none"
        style={{ fontFamily: "'Bangers', cursive" }}
      >
        ゴゴゴゴ
      </div>

      {/* Stand Arrow SVG */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-60 pointer-events-none">
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          className="sm:w-[60px] sm:h-[60px]"
        >
          <polygon
            points="30,5 55,55 30,45 5,55"
            fill="#fbbf24"
            stroke="#fff"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Remove the <img> tag, background is now set */}

      <h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-yellow-300 drop-shadow-lg"
        style={{ fontFamily: "'Bangers', cursive" }}
      >
        Our Bizarre Adventure: <span className="text-pink-400">Part 3</span>
        <br />
        <span className="text-purple-300 text-lg sm:text-2xl">
          Months of Love
        </span>
      </h1>

      <div className="bg-black bg-opacity-60 border-2 sm:border-4 border-yellow-400 rounded-2xl shadow-2xl p-4 sm:p-8 max-w-xs sm:max-w-md w-full">
        {stand ? (
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2"
              style={{ fontFamily: "'Bangers', cursive" }}
            >
              Stand Name: {stand.name}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-white">
              <strong>Ability:</strong> {stand.ability}
            </p>
            <p className="mt-2 text-base sm:text-lg text-white">
              <strong>Power:</strong> {stand.power}
            </p>
            <p className="mt-2 text-base sm:text-lg text-white">
              <strong>Speed:</strong> {stand.speed}
            </p>
            <p className="mt-2 text-base sm:text-lg text-white">
              <strong>Range:</strong> {stand.range}
            </p>
            <p className="mt-2 text-base sm:text-lg text-white">
              <strong>Durability:</strong> {stand.durability}
            </p>
            <p className="mt-4 italic text-green-300 text-lg sm:text-xl">
              "{stand.quote}"
            </p>
          </div>
        ) : (
          <p className="italic text-center text-gray-300 text-base sm:text-lg">
            Click below to reveal your Stand...
          </p>
        )}

        <button
          onClick={() => setStand(getRandomStand())}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-400 hover:to-pink-500 text-black font-bold py-2 sm:py-3 px-4 rounded-xl transition text-lg sm:text-xl shadow-lg border-2 border-pink-400"
          style={{ fontFamily: "'Bangers', cursive" }}
        >
          Reveal My Stand!
        </button>
      </div>

      <p
        className="mt-8 sm:mt-10 italic text-base sm:text-lg text-yellow-200 drop-shadow-lg"
        style={{ fontFamily: "'Bangers', cursive" }}
      >
        To Be Continued...
      </p>
    </div>
  );
};

export default OurBizarreAdventure;
