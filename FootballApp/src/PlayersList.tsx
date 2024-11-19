// import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { PlayerForm } from "./forms/PlayerForm";
import { usePlayerList } from "./hooks/usePlayerList";
import { SinglePlayer } from "./SinglePlayer";


export const PlayersList = () => {

    const { data: playersList, error, loading, removePlayer, addPlayer } = usePlayerList();
    const [seeAdPlayerForm, setSeeAdPlayerForm] = useState(false);

    if(loading) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: { error }</p>
    if (!playersList) return <p>Brak zawodników w bazie</p>

    const seeAdPlayerFormHandle = () => {

        setSeeAdPlayerForm(prevState => !prevState);
    }

    return <>
        <ul>
            {playersList?.map(el => <SinglePlayer key={el.id}
                onPlayerRemove={removePlayer} player={el} />)}
        </ul>
        {seeAdPlayerForm? <PlayerForm onNewPlayer={addPlayer} /> : null}
        <button onClick={seeAdPlayerFormHandle}>Dodaj zawodnika</button>
    </>
}
