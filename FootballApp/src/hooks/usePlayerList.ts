import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { PlayersType } from "../types";

export const usePlayerList = () => {

    const { error, loading, apiGet } = useApi()
    const [data, setData] = useState<PlayersType[]>();

    const getPlayers = async () => {
        
        const response = await apiGet('players');
        if (response) setData(response as PlayersType[]);
    }

    const removePlayer = (id: string) => {
        
        alert('Czy napewno chcesz usunąć tego zawodnika?')
        setData(prevPlayers => prevPlayers?.filter(
            player => player.object.id !== id))
    }

    const addPlayer = (player: PlayersType) => {

        setData(prevPlayers => [...(prevPlayers || []), player]);
    };

    useEffect(() => {

        getPlayers();
    }, [])
    
    return {

        data,
        error,
        loading,
        removePlayer,
        addPlayer
    }
}

