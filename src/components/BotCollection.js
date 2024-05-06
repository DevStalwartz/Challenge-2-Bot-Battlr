// src/BotCollection.js
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  const handleEnlist = (bot) => {
    enlistBot(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={handleEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
