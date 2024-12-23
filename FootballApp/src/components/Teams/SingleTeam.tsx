import { useDeleteTeam } from "../../hooks/useDeleteTeam";
// import { useGetPlayersListQuery } from "./queries/useGetPlayersListQuery";
import { TeamType } from "../../types"


type SingleTeamProps = {

    team: TeamType;
    onTeamRemove: (id: string) => void;
}


export const SingleTeam = ({ team, onTeamRemove }: SingleTeamProps) => {

    // const { data: playersList } = useGetPlayersListQuery();
    
    const { deleteTeam } = useDeleteTeam();

    const handleDelete = () => {
        
        deleteTeam(team.id);
        onTeamRemove(team.id);
    }

    return <>
        <p>{team.Nazwa}</p>
        <button onClick={handleDelete}>Usuń</button>
        <button>Edytuj</button>
    </>
}