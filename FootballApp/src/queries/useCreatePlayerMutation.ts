import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayerDto, PlayersType } from "../types";

export const  useCreatePlayerMutation = () => {
    
    const { apiPost } = useApi();
    const queryClient = useQueryClient();
    
    const { data, mutate, error, isPending } = useMutation({

        mutationKey: ['players'],
        mutationFn: async (object: PlayersType) => {

            return apiPost<PlayersType, PlayerDto>(`players`, { object });
        },
        onSuccess: (createdPlayer) => {

            queryClient.setQueryData<PlayersType[]>(['players'], oldPlayers => {

                return [...(oldPlayers || []), createdPlayer]
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