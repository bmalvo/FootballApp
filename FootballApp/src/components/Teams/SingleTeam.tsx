import { useState } from "react";
import { TeamType } from "../../types"
import { DeleteTeamConfirmation } from "./DeleteTeamConfirmation";
import { EditTeam } from "./EditTeam";


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
        <p>{team.Zawodnicy.join(', ') }</p>
            {mode === 'edit' ? <EditTeam team={team}/> : null}
        {mode === 'delete' ? null : <button onClick={toggleEditMode}>
            {mode === 'edit' ? 'Cofnij' : 'Edytuj'}
        </button>}
            {mode === 'delete' ? <DeleteTeamConfirmation team={team} /> : null}
        {mode === 'edit' ? null : <button onClick={toggleDeleteMode}>
            {mode === 'delete' ? 'Cofnij' : 'Usuń'}
        </button>}
    </>
};