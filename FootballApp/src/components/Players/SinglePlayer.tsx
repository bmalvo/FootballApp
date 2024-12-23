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

        setMode(prev => prev ==='edit' ? 'none' :'edit')
    };

    const toggleDeleteMode = () => {

        setMode(prev => prev ==='delete' ? 'none' :'delete')
    }


    return <>
        <li><p>{player.Imię} {player.Nazwisko} {`-${player.Drużyna}` }</p>
            {mode === 'edit' ? <EditPlayer player={player} /> : null}
            <button onClick={toggleEditMode}>
                {mode === 'edit' ? 'Cofnij' : 'Edytuj'}
            </button>
            {mode === 'delete' ? <DeletePlayerConfirmation player={player} /> : null}
            <button onClick={toggleDeleteMode}>
                {mode === 'delete' ? 'Cofnij' : 'Usuń'}
            </button>
        </li>
    </>
} 