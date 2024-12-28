import { useDeleteTeamMutation } from "../../queries/useDeleteTeamMutation";
import { StyledButton } from "../../StyledWrappers/StyledWrapper";
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
        <StyledButton onClick={() => deleteTeam()}>Usuń</StyledButton>
    </>
};