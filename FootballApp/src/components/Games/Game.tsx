import { useState } from "react";
import { GamesType } from "../../types"
import { EditGame } from "./EditGame";
import { DeleteGameConfirmation } from "./DeleteGameConfirmation";
import { StyledButton } from "../../StyledWrappers/StyledWrapper";

type GameProps = {

    game: GamesType;
}

export const Game = ({ game }: GameProps) => {

    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');

    const toggleEditMode = () => {

        setMode(prev => prev === 'edit' ? 'none' : 'edit')
    }

    const toggleDeleteMode = () => {

        setMode(prev => prev === 'delete' ? 'none' : 'delete')
    }

    return <>
        <li>
            <h3>{game.Drużyny.gospodarz} {game.Wynik.gospodarz}:{game.Wynik.gość} {game.Drużyny.gość}</h3>
            <p>Data: {game["Data spotkania"]}</p>
            <p>Czas meczu: {game["Czas trwania"]}</p>
            <p>Miejsce spotkania: {game["Miejsce spotkania"]}</p>
            {mode === 'edit' ? <EditGame game={game} /> : null}
            {mode === 'delete' ? null : <StyledButton onClick={toggleEditMode}>
                {mode === 'edit' ? 'Anuluj' : 'Edytuj'}
            </StyledButton>}
            {mode === 'delete' ? <DeleteGameConfirmation game={game} /> : null}
            {mode === 'edit' ? null : <StyledButton onClick={toggleDeleteMode}>
                {mode === 'delete' ? 'Anuluj' : 'Usuń'}
            </StyledButton>}
        </li>
    </>
};