import React, { useState } from "react";
import "./floor.css";
import { items, IFloor } from "../Data/items";

export type IFloorProps = {
  floor: IFloor;
  isMainSwitchOn: boolean;
  isInLobby: boolean;
  onExitToLobby: () => void;
  onParty: () => void;
  partyHostId: number | null;
};

export const Floor = ({
  floor: { id, avatar, level, name, door },
  isMainSwitchOn,
  isInLobby,
  onExitToLobby,
  onParty,
  partyHostId,
}: IFloorProps) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    console.log("click", isOn);
  };

  return (
    <div className={isOn && isMainSwitchOn ? "backgroundClass" : "colorOff"}>
      <h2 className={isOn && isMainSwitchOn ? "headingOn" : "headingOff"}>
        Level {level}
      </h2>
      <button disabled={isMainSwitchOn ? false : true} onClick={handleClick}>
        {isOn && isMainSwitchOn ? "On" : "Off"}
      </button>
      <div className="floorClass">
        <img
          hidden={isInLobby || partyHostId != null ? true : false}
          height="200px"
          width="200px"
          src={avatar}
          alt=""
        />
        {partyHostId != null && partyHostId === id
          ? items.map((item, index) => (
              <img height="200px" width="200px" src={item.avatar} alt="" />
            ))
          : null}
        <div className="container">
          <img className="image" src={door} alt="" />
          <div className="text">{name}</div>
          <button
            hidden={isInLobby ? true : false}
            disabled={isInLobby ? true : false}
            onClick={onExitToLobby}
          >
            Exit
          </button>
          <button onClick={onParty}>Party!</button>
        </div>
      </div>
    </div>
  );
};
