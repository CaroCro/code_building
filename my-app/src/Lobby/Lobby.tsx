import "./lobby.css";
import { items } from "../Data/items";
export type LobbyProps = {
  lobbyMembers: number[];
  onClickAvatar: (memberId: number) => void;
};

export const Lobby = ({ lobbyMembers, onClickAvatar }: LobbyProps) => {
  return (
    <div className="lobbyClass">
      <h2>Lobby</h2>
      {lobbyMembers.map((id, index) => {
        const avatar = items.find((each) => each.id === id)?.avatar;
        if (!avatar) return null;
        return (
          <img
            height="200px"
            width="200px"
            src={avatar}
            alt=""
            onClick={() => onClickAvatar(id)}
          />
        );
      })}
      {/* <img height="200px" width="200px" src={props.lobbyMembers} alt="" /> */}
    </div>
  );
};
