import { useState } from "react";
import { useApi } from "./useApi";
import { TeamType } from "../types";

export const useDeleteTeam = () => {

    const { error, loading, apiDelete } = useApi()
    const [data, setData] = useState<TeamType>();

    const deleteTeam = async (id: string) => {
        
        const response = await apiDelete(`teams/${id}`);
        if (response) setData(response as TeamType);
    }
    
    return {

        data,
        error,
        loading,
        deleteTeam
    }
}