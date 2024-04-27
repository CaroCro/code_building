import React, { useState } from "react";
import "./App.css";
import { Floor } from "./Floor/Floor";
import { items } from "./Data/items";
import { Lobby } from "./Lobby/Lobby";

function App() {
  const [isMainSwitchOn, setIsMainSwitchOn] = useState<boolean>(false);
  const [lobbyMembers, setLobbyMembers] = useState<number[]>([]);
  const handleClickMainSwitch = () => {
    setIsMainSwitchOn(!isMainSwitchOn);
  };
  const [partyHostId, setPartyHostId] = useState<number | null>(null);

  return (
    <div className="App">
      <button onClick={handleClickMainSwitch}>
        {isMainSwitchOn ? "Main Switch On" : "Main Switch Off"}
      </button>
      {items.map((item, index) => (
        <Floor
          floor={item}
          isMainSwitchOn={isMainSwitchOn}
          isInLobby={lobbyMembers.includes(item.id)}
          onExitToLobby={() => setLobbyMembers([...lobbyMembers, item.id])}
          onParty={() => setPartyHostId(item.id)}
          partyHostId={partyHostId}
        />
      ))}
      <Lobby
        lobbyMembers={lobbyMembers}
        onClickAvatar={(memberId) =>
          setLobbyMembers(lobbyMembers.filter((each) => each !== memberId))
        }
      />
    </div>
  );
}

export default App;
