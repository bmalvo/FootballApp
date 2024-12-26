import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { GamesType } from "../types";

export const useDeleteGameMutation = (gameId: string) => {
    
    const { apiDelete } = useApi();
    const queryClient = useQueryClient();
    
    const {  mutate, isPending } = useMutation({

        mutationKey: ['games', 'delete', gameId],
        mutationFn: async () => {
            return apiDelete<GamesType>(`games/${gameId}`)
        },
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['games']
            })
        }
    })

    return {
        mutate,
        isPending
    }
};