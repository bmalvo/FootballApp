import { useGetGamesQuery } from "../../queries/useGetGamesQuery";
import { AddGame } from "./AddGame";
import { Game } from "./Game";


export const Games = () => {
    

    const { data: games, error, isPending } = useGetGamesQuery();

    if (!games) return <p>Brak rozgrywek do wyświetlenia</p>
    if (error) return <p>Wystąpił błąd - {error.message}</p>
    if (isPending) return <p>Wczytywanie danych...</p>

    return <>
        <ul>
            {games.map(game => <Game game={game} key={game.id} />)}
        </ul>
        <AddGame />
    </>
};