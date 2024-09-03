// import { useQuery } from "@tanstack/react-query"
import { PlayerForm } from "./forms/PlayerForm";
import { usePlayerList } from "./hooks/usePlayerList";
import { SinglePlayer } from "./SinglePlayer";


export const Players = () => {

    const { data, error, loading, removePlayer, addPlayer } = usePlayerList();
    // console.log('data from player list: ', data)

    if(loading) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: { error }</p>
    if (!data) return <p>Brak zawodników w bazie</p>

    return <>
        <ul>
            {data?.map(el => <SinglePlayer key={el.id} onPlayerRemove= {removePlayer} player={el} />)}
        </ul>
        <PlayerForm onNewPlayer={ addPlayer} />
    </>
}
