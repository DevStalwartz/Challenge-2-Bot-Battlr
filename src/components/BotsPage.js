// src/BotsPage.js
import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log("Error fetching bots:", error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy);
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => console.log(`Bot with id ${botId} deleted successfully`))
      .catch((error) => console.log("Error deleting bot:", error));
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotsPage;
