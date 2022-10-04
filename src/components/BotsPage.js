import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then ((res) => res.json())
    .then ((data) => setBots(data))
  }, []);

  function addToYourArmy(bot) {
    if (yourArmy.includes(bot)) 
    return;
    setYourArmy([...yourArmy, bot])
  }

  function deleteBot(bot) {
    const updateBots = bots.filter((bts) => bts.id !== bot.id);
    const updateYourArmy = yourArmy.filter((b) => b.id !== bot.id);

    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(updateBots)
      setYourArmy(updateYourArmy)
    })
  }

  return (
    <div>
      <YourBotArmy
      yourArmy={yourArmy}
      setYourArmy={setYourArmy}
      deleteBot={deleteBot}
      />
      <BotCollection 
      bots={bots}
      addToYourArmy={addToYourArmy}
      deleteBot={deleteBot}

      />
    </div>
  )
}

export default BotsPage;
