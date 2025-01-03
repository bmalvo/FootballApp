import { useDeletePlayerMutation } from "../../queries/useDeletePlayerMutation"
import { StyledButton } from "../../StyledWrappers/StyledWrapper";
import { PlayersType } from "../../types"

type DeletePlayerConfirmationProps = {
    
    player: PlayersType;
}

export const DeletePlayerConfirmation = ({ player }: DeletePlayerConfirmationProps) => {

    const { mutate: deletePlayer, isPending } = useDeletePlayerMutation(player.id);
    
    if (isPending) return <p>Wczytywanie danych...</p>

    return <>
        <p>Na pewno chcesz usunąć gracza {player.Imię} {player.Nazwisko} z bazy?</p>
        <StyledButton onClick={() => deletePlayer()}>Usuń</StyledButton>
    </>
};