import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayersType } from "../types";

export const  useDeletePlayerMutation = () => {
    
    const { apiDelete } = useApi();
    const queryClient = useQueryClient();
    
    const {data, mutate, error, isPending } = useMutation({

        mutationKey: ['players'],
        mutationFn: async (playerId: string) => {

            return apiDelete<PlayersType>(`players/${playerId}`)
        },
        onSuccess: (deletedPlayer) => {

            queryClient.setQueryData<PlayersType[]>(['players'], oldPlayers => {

                return oldPlayers?.filter(player => player.id !== deletedPlayer?.id)
            })
        }
    })

    return {
        data,
        mutate,
        error,
        isPending
    }
}