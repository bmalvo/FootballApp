import { useDeleteTeamMutation } from "../../queries/useDeleteTeamMutation";
import { TeamType } from "../../types";

type DeletePlayerConfirmationProps = {

    team: TeamType;
}

export const DeleteTeamConfirmation = ({ team }: DeletePlayerConfirmationProps) => {

    const { mutate: deleteTeam, isPending } = useDeleteTeamMutation(team.id);

    console.log(team.id)

    if(isPending) return <p>Trwa wczytywanie danych...</p>

    return <>
        <p>Czy na pewno chcesz usunąć drużynę {team.Nazwa} ?</p>
        <button onClick={() => deleteTeam()}>Usuń</button>
    </>
};