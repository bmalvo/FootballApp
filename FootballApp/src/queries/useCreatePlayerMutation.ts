import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayerDto, PlayersType } from "../types";

export const  useCreatePlayerMutation = () => {
    
    const { apiPost } = useApi();
    const queryClient = useQueryClient();
    
    const { mutate, error, isPending } = useMutation({

        mutationKey: ['players', 'create'],
        mutationFn: async (pauload: PlayerDto) => {

            return apiPost<PlayersType, PlayerDto>(`players`, pauload);
        },
        onSuccess: (createdPlayer) => {

            queryClient.setQueryData<PlayersType[]>(['players'], oldPlayers => {

                return [...(oldPlayers || []), createdPlayer]
            })
        }
    })

    return {
        mutate,
        error,
        isPending
    }
}