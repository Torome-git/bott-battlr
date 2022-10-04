import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({yourArmy, setYourArmy, deleteBot}) {
  //your bot army code here...
  function removeBot(bot) {
    const yourBots = yourArmy.filter((b) => b.id !==bot.id);
    setYourArmy(yourBots)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourArmy.map((bot) => {
            return(
              <BotCard 
               bot={bot}
               key={bot.id}
               deleteBot={deleteBot}
               addBot={true}
               removeBot={removeBot}
              />
            )
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
