import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayerDto, PlayersType } from "../types";

export const  useUpdatePlayerMutation = (playerId: string) => {
    
    const { apiEdit } = useApi();
    const queryClient = useQueryClient();
    
    const { mutate, error, isPending } = useMutation({

        mutationKey: ['players', 'update', playerId],
        mutationFn: async (payload: PlayerDto) => {

            return apiEdit<PlayersType, PlayerDto>(`players/${playerId}`, payload);
        },
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['players']
            })
        }
    })

    return {
        mutate,
        error,
        isPending
    }
}