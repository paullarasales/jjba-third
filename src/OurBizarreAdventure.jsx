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
