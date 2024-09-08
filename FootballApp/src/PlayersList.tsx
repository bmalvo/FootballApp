// import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { PlayerForm } from "./forms/PlayerForm";
import { usePlayerList } from "./hooks/usePlayerList";
import { SinglePlayer } from "./SinglePlayer";


export const Players = () => {

    const { data, error, loading, removePlayer, addPlayer } = usePlayerList();
    const [seeAdForm, setAdForm] = useState(false);

    if(loading) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: { error }</p>
    if (!data) return <p>Brak zawodników w bazie</p>

    const seeAdFormHandle = () => {

        setAdForm(prevState => !prevState);
    }

    return <>
        <ul>
            {data?.map(el => <SinglePlayer key={el.id}
                onPlayerRemove={removePlayer} player={el} />)}
        </ul>
        {seeAdForm? <PlayerForm onNewPlayer={addPlayer} /> : null}
        <button onClick={seeAdFormHandle}>Dodaj zawodnika</button>
    </>
}
