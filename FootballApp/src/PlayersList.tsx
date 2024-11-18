// import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { PlayerForm } from "./forms/PlayerForm";
import { usePlayerList } from "./hooks/usePlayerList";
import { SinglePlayer } from "./SinglePlayer";


export const PlayersList = () => {

    const { data, error, loading, removePlayer, addPlayer } = usePlayerList();
    const [seeAdPlayerForm, setSeeAdPlayerForm] = useState(false);

    if(loading) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: { error }</p>
    if (!data) return <p>Brak zawodników w bazie</p>

    const seeAdPlayerFormHandle = () => {

        setSeeAdPlayerForm(prevState => !prevState);
    }

    return <>
        <ul>
            {data?.map(el => <SinglePlayer key={el.id}
                onPlayerRemove={removePlayer} player={el} />)}
        </ul>
        {seeAdPlayerForm? <PlayerForm onNewPlayer={addPlayer} /> : null}
        <button onClick={seeAdPlayerFormHandle}>Dodaj zawodnika</button>
    </>
}
