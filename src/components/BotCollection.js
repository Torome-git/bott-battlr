import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToYourArmy, deleteBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => {
          return (
            <BotCard 
             bot={bot}
             key={bot.id}
             addToYourArmy={addToYourArmy}
             deleteBot={deleteBot}
            />
          )
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
