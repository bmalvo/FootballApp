import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import { GamesType } from "../types";

export const useGetGamesQuery = () => {
    
    const { apiGet } = useApi();
    
    const { data, error, isPending } = useQuery({
        
        queryKey: ['games'],
        queryFn: async () => {
            
            return apiGet<GamesType[]>('games')
        }
    })

    return {
        data,
        error,
        isPending
    }
};