import { useState } from "react";
import { GamesType } from "../../types"
import { EditGame } from "./EditGame";
import { DeleteGameConfirmation } from "./DeleteGameConfirmation";

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
            <p>{game["Data spotkania"]}-{game["Czas trwania"]}-{game["Miejsce spotkania"]} </p>
            {mode === 'edit' ? <EditGame game={game} /> : null}
            <button onClick={toggleEditMode}>
                {mode === 'edit' ? 'Anuluj' : 'Edytuj'}
            </button>
            {mode === 'delete' ? <DeleteGameConfirmation game={game} /> : null}
            <button onClick={toggleDeleteMode}>
                {mode === 'delete' ? 'Anuluj' : 'Usuń'}
            </button>
        </li>
    </>
};