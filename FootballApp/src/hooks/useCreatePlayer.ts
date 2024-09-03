import { useState } from "react";
import { useApi } from "./useApi";
import { PlayerDto, PlayersType } from "../types";

export const useCreatePlayer = () => {

    const { error, loading, apiPost } = useApi()
    const [data, setData] = useState<PlayersType>();

    const createPlayer = async (object: object) => {
        
        const response = await apiPost<PlayersType, PlayerDto>(`players`, {object});
        if (response) setData(response as PlayersType);
    }
    
    return {

        data,
        error,
        loading,
        createPlayer
    }
}
