import { useState } from "react";
import { useApi } from "./useApi";
import { PlayersType } from "../types";

export const useDeletePlayer = () => {

    const { error, loading, apiDelete } = useApi()
    const [data, setData] = useState<PlayersType>();

    const deletePlayer = async (id: string) => {
        
        const response = await apiDelete(`players/${id}`);
        if (response) setData(response as PlayersType);
    }
    
    return {

        data,
        error,
        loading,
        deletePlayer
    }
}
