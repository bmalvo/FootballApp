import { useDeleteTeam } from "./hooks/useDeleteTeam";
import { TeamType } from "./types"


type SingleTeamProps = {

    team: TeamType;
    onTeamRemove: (id: string) => void;
}


export const SingleTeam = ({ team, onTeamRemove }: SingleTeamProps) => {
    
    const { deleteTeam } = useDeleteTeam();

    const handleDelete = () => {
        
        deleteTeam(team.id);
        onTeamRemove(team.id);
    }

    return <>
        <p>{team.object.Nazwa}</p>
        <button onClick={handleDelete}>Usuń</button>
        <button>edytuj</button>
    </>
}