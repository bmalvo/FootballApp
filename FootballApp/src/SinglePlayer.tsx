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

        deletePlayer(player.id);
        console.log('url: ', player)
    }

    useEffect(() => {

        if (!data) return;
        onPlayerRemove(data.object.id);
    },[data])

    return <>
        <li><p>{player.object.Imię} {player.object.Nazwisko}</p>
            <button disabled={loading} onClick={onDelete}>Usuń</button>
            {error && <p>{ error }</p>}
        </li>
    </>
} 