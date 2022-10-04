import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = ([]);

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

  return (
    <div>
      <YourBotArmy
      bots={bots}
      yourArmy={yourArmy}
      setYourArmy={setYourArmy}
      />
      <BotCollection 
      bots={bots}
      addToYourArmy={addToYourArmy}

      />
    </div>
  )
}

export default BotsPage;
