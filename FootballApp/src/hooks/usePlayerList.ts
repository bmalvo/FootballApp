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

    useEffect(() => {

        getPlayers
    }, [])
    
    return {

        data,
        error,
        loading
    }
}

