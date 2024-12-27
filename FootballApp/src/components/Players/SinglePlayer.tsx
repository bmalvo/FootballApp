import { useState } from "react";
import { PlayersType } from "../../types"
import { EditPlayer } from "./EditPlayer";
import { DeletePlayerConfirmation } from "./DeletePlayerConfirmation";

type PlayerType = {

    player: PlayersType;
}

export const SinglePlayer = ({ player }: PlayerType) => {
    
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');


    const toggleEditMode = () => {

        setMode(prev => prev === 'edit' ? 'none' : 'edit')
    };

    const toggleDeleteMode = () => {

        setMode(prev => prev === 'delete' ? 'none' : 'delete')
    }


    return <>
        <li><p>{player.Imię} {player.Nazwisko} {player.Drużyna !== '' ? player.Drużyna : null}</p>
            {mode === 'edit' ? <EditPlayer player={player} /> : null}
            {mode === 'delete' ? null : <button onClick={toggleEditMode}>
                {mode === 'edit' ? 'Cofnij' : 'Edytuj'}
            </button>}
            {mode === 'delete' ? <DeletePlayerConfirmation player={player} /> : null}
            {mode === 'edit' ? null : <button onClick={toggleDeleteMode}>
                {mode === 'delete' ? 'Cofnij' : 'Usuń'}
            </button>}
        </li>
    </>
};