import { useState } from "react";
import { useApi } from "./useApi";
import { TeamType, TeamDto } from "../types";

export const useCreateTeam = () => {

    const { error, loading, apiPost } = useApi()
    const [data, setData] = useState<TeamType>();

    const createTeam = async (object: object) => {
        
        const response = await apiPost<TeamType, TeamDto>(`teams`, {object});
        if (response) setData(response as TeamType);
    }
    
    return {

        data,
        error,
        loading,
        createTeam
    }
}
