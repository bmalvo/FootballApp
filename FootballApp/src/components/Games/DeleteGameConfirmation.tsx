import { useDeleteGameMutation } from "../../queries/useDeleteGameMutation";
import { GamesType } from "../../types";

type DeleteGameConfirmationProps = {

    game: GamesType;
}

export const DeleteGameConfirmation = ({game}: DeleteGameConfirmationProps) => {

    const { mutate: deleteGame, isPending } = useDeleteGameMutation(game.id !);
        
        if(isPending) return <p>Wczytywanie danych...</p>
    
        return <>
            <p>Na pewno chcesz usunąć rozgrywkę { game.Drużyny.gospodarz}-{game.Drużyny.gość} z bazy danych?</p>
            <button onClick={() => deleteGame()}>Usuń</button>
        </>
}