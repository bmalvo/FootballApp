import { useState } from "react";
import { PlayersType } from "../../types"
import { EditPlayer } from "./EditPlayer";

type PlayerType = {

    player: PlayersType;
}

export const SinglePlayer = ({ player }: PlayerType) => {
    
    const [seeEditForm, setSeeEditForm] = useState(false);


    const handleEditToggle = () => {

        setSeeEditForm(prev => !prev)
    }


    return <>
        <li><p>{player.Imię} {player.Nazwisko} {`-${player.Drużyna}` }</p>
            {seeEditForm ? <EditPlayer player={player} /> : null}
            <button onClick={handleEditToggle}>{ seeEditForm? 'Cofnij': 'Edytuj'}</button>
        </li>
    </>
} 