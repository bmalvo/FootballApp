import { useGetGamesQuery } from "../../queries/useGetGamesQuery";
import { useGetPlayersListQuery } from "../../queries/useGetPlayersListQuery"
import { useGetTeamListQuery } from "../../queries/useGetTeamListQuery";
import { GamesType } from "../../types";

export const Statistics = () => {

    const { data: players, isFetching: playersFetching } = useGetPlayersListQuery();
    const { data: teams, isFetching: teamsFetching } = useGetTeamListQuery();
    const { data: games, isPending: gamesPending } = useGetGamesQuery();
    
    if (playersFetching || teamsFetching || gamesPending) return <p>Wczytywanie danych...</p>

    // Last game
    const firstGameHome = games? games[games.length -1].Drużyny.gospodarz : '';
    const firstGameGuest = games ? games[games.length -1].Drużyny.gość : '';
    const firstGameDate = games ? games[games.length-1]["Data spotkania"] : '';
    const firstGameTime = games ? games[games.length-1]["Czas trwania"] : '';
    const firstGameGoalsHome = games ? games[games.length-1].Wynik.gospodarz : '';
    const firstGameGoalsGuest = games ? games[games.length-1].Wynik.gość : '';

    return <>
        <h3>
            Liczba zawodników w bazie: {players?.length || 'Brak zawodników'}
        </h3>
        <h3>
            Liczba zarejestrowanych drużyn: {teams?.length || 'Brak drużyn'}
        </h3>
        <h3>
            Liczba rozegranych spotkań: {games?.length || 'Brak rozgrywek'}
        </h3>
        <div>
            <h3>Ostatnio rozegrane spotkanie: </h3>
            <p>{firstGameHome}-{firstGameGoalsHome}:{firstGameGoalsGuest}-{firstGameGuest}</p>
            <p>Czas spotkania: {firstGameDate}</p>
            <p>Czas trwania spotkania { firstGameTime}</p>
        </div>
        <div>
        <h3>Lista drużyn z największą liczbą goli:</h3>
        </div>
    </>
}