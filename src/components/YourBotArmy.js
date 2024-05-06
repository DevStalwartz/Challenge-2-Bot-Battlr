// src/YourBotArmy.js
import React from "react";

function YourBotArmy({ army, releaseBot }) {
  const handleRelease = (botId) => {
    releaseBot(botId);
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.map((bot) => (
            <div className="column" key={bot.id}>
              <div className="ui card">
                <div className="image">
                  <img alt="oh no!" src={bot.avatar_url} />
                </div>
                <div className="content">
                  <div className="header">{bot.name}</div>
                  <div className="meta">{bot.bot_class}</div>
                  <div className="description">{bot.catchphrase}</div>
                </div>
                <div className="extra content">
                  <button
                    className="ui mini red button"
                    onClick={() => handleRelease(bot.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
