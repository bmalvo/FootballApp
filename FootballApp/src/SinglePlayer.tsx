import { useEffect, useState } from "react";
import { useDeletePlayer } from "./hooks/useDeletePlayer";
import { PlayersType } from "./types"
import { EditPlayerForm } from "./forms/EditPlayerForm";

type PlayerType = {

    player: PlayersType;
    onPlayerRemove: (id: string) => void;
}

export const SinglePlayer = ({ player, onPlayerRemove }: PlayerType) => {
    
    const { loading, error, deletePlayer, data } = useDeletePlayer();
    const [seeForm, setSeeForm] = useState(false);


    const onDelete = () => {

        deletePlayer(player.id);
        console.log('url: ', player)
    }

    useEffect(() => {

        if (!data) return;
        onPlayerRemove(data.id);
    }, [])
    
    // edit player

    const onEdit = () => {

        setSeeForm(!seeForm);

    }

    return <>
        <li><p>{player.object.Imię} {player.object.Nazwisko}</p>
            <button disabled={loading} onClick={onDelete}>Usuń</button>
            <button disabled={loading} onClick={onEdit}>Edytuj</button>
            {seeForm ? <EditPlayerForm player={ player} /> : null}
            {error && <p>{ error }</p>}
        </li>
    </>
} 