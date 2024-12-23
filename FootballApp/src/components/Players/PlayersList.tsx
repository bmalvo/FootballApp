import { useState } from "react";
import { PlayerForm } from "../../forms/PlayerForm";
// import { usePlayerList } from "./hooks/usePlayerList";
import { SinglePlayer } from "./SinglePlayer";
// import { useQuery } from "@tanstack/react-query";
import { useApi } from "../../hooks/useApi";
import { useGetPlayersListQuery } from "../../queries/useGetPlayersListQuery";
import { useDeletePlayerMutation } from "../../queries/useDeletePlayerMutation";
import { PlayersType } from "../../types";


export const PlayersList = () => {

    // const { apiGet} = useApi();

    const { data, error, isLoading} = useGetPlayersListQuery();

    const {isPending, mutate: removePlayer } = useDeletePlayerMutation();
    const [displayAddPlayerForm, setDisplayAddPlayerForm] = useState(false);
    // const getPlayers = usePlayerList();


    if(isLoading) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: { error.message }</p>
    if (!data) return <p>Brak zawodników w bazie</p>

    const addPlayerFormHandle = () => {

        setDisplayAddPlayerForm(prevState => !prevState);
        // getPlayers
    }

    return <>
        <ul>
    
            {data.map((el: PlayersType) => <SinglePlayer key={el.id} onPlayerRemove={removePlayer} player={el} />)}
            
        </ul>
        
        {displayAddPlayerForm? <PlayerForm /> : null}
        <button onClick={addPlayerFormHandle}>Dodaj zawodnika</button>
    </>
}
