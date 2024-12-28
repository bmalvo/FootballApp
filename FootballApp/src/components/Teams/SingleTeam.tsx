import { useState } from "react";
import { TeamType } from "../../types"
import { DeleteTeamConfirmation } from "./DeleteTeamConfirmation";
import { EditTeam } from "./EditTeam";
import { StyledButton } from "../../StyledWrappers/StyledWrapper";


type SingleTeamProps = {

    team: TeamType;
}


export const SingleTeam = ({ team }: SingleTeamProps) => {
    
    const [mode, setMode] = useState<'none' | 'edit' | 'delete'>('none')
    
    const toggleEditMode = () => {
    
        setMode(prev => prev === "edit" ? 'none' : 'edit');
    }

    const toggleDeleteMode = () => {

        setMode(prev => prev === "delete" ? "none" : 'delete')
    }


    return <>
        <h2>{team.Nazwa}</h2>
        {team.Zawodnicy.length > 0  ? <p>Zawodnicy: {team.Zawodnicy.join(', ')} </p>: null }
            {mode === 'edit' ? <EditTeam team={team}/> : null}
        {mode === 'delete' ? null : <StyledButton onClick={toggleEditMode}>
            {mode === 'edit' ? 'Cofnij' : 'Edytuj'}
        </StyledButton>}
            {mode === 'delete' ? <DeleteTeamConfirmation team={team} /> : null}
        {mode === 'edit' ? null : <StyledButton onClick={toggleDeleteMode}>
            {mode === 'delete' ? 'Cofnij' : 'Usuń'}
        </StyledButton>}
    </>
};