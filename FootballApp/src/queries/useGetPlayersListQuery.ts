import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayersType } from "../types";

export const useGetPlayersListQuery = () => {

    const { apiGet} = useApi();

    const { data, error, isLoading } = useQuery({

        queryKey: ['players'],
        queryFn: async () => {
                
            return apiGet<PlayersType[]>('players');
        }
    })

    return {

        data,
        error,
        isLoading
    }

}