import { useGetGamesQuery } from "../../queries/useGetGamesQuery";
import { useGetPlayersListQuery } from "../../queries/useGetPlayersListQuery"
import { useGetTeamListQuery } from "../../queries/useGetTeamListQuery";

export const Statistics = () => {

    const { data: players, isFetching: playersFetching } = useGetPlayersListQuery();
    const { data: teams, isFetching: teamsFetching } = useGetTeamListQuery();
    const { data: games, isPending: gamesPending} = useGetGamesQuery();
    
    if(playersFetching || teamsFetching || gamesPending) return <p>Wczytywanie danych...</p>

    return <>
        <h3>Liczba zawodników w bazie: {players?.length || 'Brak zawodników'}</h3>
        <h3>Liczba zarejestrowanych drużyn: { teams?.length || 'Brak drużyn'}</h3>
        <h3>Liczba rozegranych spotkań: { games?.length || 'Brak rozgrywek'}</h3>
    </>
}