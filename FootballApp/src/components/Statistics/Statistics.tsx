import { useGetPlayersListQuery } from "../../queries/useGetPlayersListQuery"

export const Statistics = () => {

    const { data, isFetching } = useGetPlayersListQuery();
    
    if(isFetching) return <p>Wczytywanie danych...</p>

    return <>
        <h3>Liczba zawodników w bazie: {data?.length || 'Brak zawodników'}</h3>
        <h3>Liczba zarejestrowanych drużyn: "w trakcie zdobywania danych"</h3>
        <h3>Liczba rozegranych spotkań: 'wynik wkrótce'</h3>
    </>
}