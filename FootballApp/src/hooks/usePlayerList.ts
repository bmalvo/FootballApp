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

        setData(prevPlayers => prevPlayers?.filter(
            player => player.id.toString() !== id))
    }

    useEffect(() => {

        getPlayers();
    }, [])
    
    return {

        data,
        error,
        loading,
        removePlayer
    }
}

