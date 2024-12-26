import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import { GamesType, GamesTypeDTO } from "../types";

export const useUpdateGameMutation = (gameId: string) => {
    
    const { apiEdit } = useApi();
    const queryClient = useQueryClient();

    const { mutate, error, isPending } = useMutation({
        
        mutationKey: ['games', 'update', 'gameId'],
        mutationFn: async (payload: GamesTypeDTO) => {

            return apiEdit<GamesType, GamesTypeDTO>(`games/${gameId}`, payload)
        },

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['games']
            });
        }
    })

    return {
        mutate,
        error,
        isPending

    }

};