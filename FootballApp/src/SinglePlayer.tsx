import { useEffect } from "react";
import { useDeletePlayer } from "./hooks/useDeletePlayer";
import { PlayersType } from "./types"

type PlayerType = {

    player: PlayersType;
    onPlayerRemove: (id: string) => void;
}

export const SinglePlayer = ({ player, onPlayerRemove }: PlayerType) => {
    
    const { loading, error, deletePlayer, data } = useDeletePlayer();
    
    const onDelete = () => {

        deletePlayer(player.id.toString());
    }

    useEffect(() => {

        if (!data) return;
        onPlayerRemove(data.id.toString());
    },[data])

    return <>
        <li><p>{player.Imię} {player.Nazwisko}</p>
            <button disabled={loading} onClick={onDelete}>Usuń</button>
            {error && <p>{ error }</p>}
        </li>
    </>
} 