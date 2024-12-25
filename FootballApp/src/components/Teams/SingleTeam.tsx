import { useState } from "react";
import { TeamType } from "../../types"
import { DeleteTeamConfirmation } from "./DeleteTeamConfirmation";


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
            <p>{team.Nazwa}</p>
            {mode === 'edit' ? 'edycja wkrótce...' : null}
            <button onClick={toggleEditMode}>
                {mode === 'edit' ? 'Cofnij' : 'Edytuj'}
            </button>
            {mode === 'delete' ? <DeleteTeamConfirmation team={team} /> : null}
            <button onClick={toggleDeleteMode}>
                {mode === 'delete' ? 'Cofnij' : 'Usuń'}
            </button>
    </>
};