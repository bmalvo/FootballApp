// import { useQuery } from "@tanstack/react-query"
import { PlayerForm } from "./forms/PlayerForm";
import { useApi } from "./hooks/useApi";
import { useEffect } from "react";
import { PlayersType } from "./types"


export const Players = () => {

    const { data, error, loading, apiGet } = useApi<PlayersType[]>()

    useEffect(() => {
        apiGet('players')
    }, [])

    if(loading) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: { error }</p>
    if (!data) return <p>Brak zawodników w bazie</p>

    return <>
    <ul>
        {data?.map(el => <li key={el.id}>{el.Imię} { el.Nazwisko}</li>)}
        </ul>
        <PlayerForm/>
    </>
}
