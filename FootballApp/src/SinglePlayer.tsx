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
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [alert, setAlert] = useState(false);

     const confirmDeletion = () => {
        // Proceed with deletion
        deletePlayer(player.id);
        setConfirmDelete(false);
    };

    const cancelDeletion = () => {
        setConfirmDelete(false);
    };


    const onDelete = () => {
        {player.object.Drużyna !== '' ? setAlert(!alert) : setConfirmDelete(!confirmDelete)}
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
            {alert? <p>nie można usunąć zawodnika prypisanego do drużyny</p> : null}
            <button disabled={loading} onClick={onDelete}>Usuń</button>
            <button disabled={loading} onClick={onEdit}>Edytuj</button>
            {seeForm ? <EditPlayerForm player={player} /> : null}
            {confirmDelete ? (
                <div>
                    <p>Napewno chcesz usunąć tego gracza?</p>
                    <button onClick={confirmDeletion}>Tak</button>
                    <button onClick={cancelDeletion}>Nie</button>
                </div>
            ) : null}
            {error && <p>{ error }</p>}
        </li>
    </>
} 