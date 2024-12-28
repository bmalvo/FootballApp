import { useGetGamesQuery } from "../../queries/useGetGamesQuery";
import { useGetPlayersListQuery } from "../../queries/useGetPlayersListQuery"
import { useGetTeamListQuery } from "../../queries/useGetTeamListQuery";
import { TeamRanking } from "./TeamRanking";

export const Statistics = () => {

    const { data: players, isFetching: playersFetching } = useGetPlayersListQuery();
    const { data: teams, isFetching: teamsFetching } = useGetTeamListQuery();
    const { data: games, isPending: gamesPending } = useGetGamesQuery();
    
    
    // Last game
    const lastGameHome = games ? games[games.length - 1].Drużyny.gospodarz : '';
    const lastGameGuest = games ? games[games.length - 1].Drużyny.gość : '';
    const lastGameDate = games ? games[games.length - 1]["Data spotkania"] : '';
    const lastGameTime = games ? games[games.length - 1]["Czas trwania"] : '';
    const lastGameGoalsHome = games ? games[games.length - 1].Wynik.gospodarz : '';
    const lastGameGoalsGuest = games ? games[games.length - 1].Wynik.gość : '';
    
    if (playersFetching || teamsFetching || gamesPending) return <p>Wczytywanie danych...</p>


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
            <p>{lastGameHome}-{lastGameGoalsHome}:{lastGameGoalsGuest}-{lastGameGuest}</p>
            <p>Czas spotkania: {lastGameDate}</p>
            <p>Czas trwania spotkania {lastGameTime}</p>
        </div>
        <div>
            <h3>Lista drużyn z największą liczbą goli:</h3>
        </div>
        <TeamRanking />
    </>
};