import { useState } from "react";
import { useApi } from "./useApi";
import { PlayerDto, PlayersType } from "../types";

export const useEditPlayer = (id: string) => {

    const { error, loading, apiEdit } = useApi()
    const [data, setData] = useState<PlayersType>();

    const editPlayer = async (object: object) => {
        
        const response = await apiEdit<PlayersType, PlayerDto>(`players/${id}`, {object});
        if (response) setData(response as PlayersType);
    }
    
    return {

        data,
        error,
        loading,
        editPlayer
    }
}