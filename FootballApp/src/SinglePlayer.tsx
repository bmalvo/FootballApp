import { usePlayerList } from "./hooks/usePlayerList";
import { PlayersType } from "./types"

type PlayerType = {

    player: PlayersType;
}

export const SinglePlayer = ({ player }: PlayerType) => {
    
    usePlayerList();

    return <>
        <li><p>{player.Imię} {player.Nazwisko}</p>
            <button>Usuń</button>
        </li>
    </>
}