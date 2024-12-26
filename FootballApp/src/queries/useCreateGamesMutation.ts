import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import { GamesType, GamesTypeDTO } from "../types";

export const useCreateGamesMutation = () => {

    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { mutate, error, isPending } = useMutation({
        
        mutationKey: ['games', 'create'],
        mutationFn: async (payload: GamesType) => {
            
            return apiPost<GamesType, GamesTypeDTO>('games', payload);
        },
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['games']
            })
        }
    });

    return {
        mutate,
        error,
        isPending
    }
};