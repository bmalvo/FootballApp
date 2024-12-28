import { useState } from "react";
import { PlayersType } from "../../types"
import { EditPlayer } from "./EditPlayer";
import { DeletePlayerConfirmation } from "./DeletePlayerConfirmation";
import { StyledButton } from "../../StyledWrappers/StyledWrapper";

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
        <li><h2>{player.Imię} {player.Nazwisko} {player.Drużyna !== '' ? player.Drużyna : null}</h2>
            {mode === 'edit' ? <EditPlayer player={player} /> : null}
            {mode === 'delete' ? null : <StyledButton onClick={toggleEditMode}>
                {mode === 'edit' ? 'Cofnij' : 'Edytuj'}
            </StyledButton>}
            {mode === 'delete' ? <DeletePlayerConfirmation player={player} /> : null}
            {mode === 'edit' ? null : <StyledButton onClick={toggleDeleteMode}>
                {mode === 'delete' ? 'Cofnij' : 'Usuń'}
            </StyledButton>}
        </li>
    </>
};