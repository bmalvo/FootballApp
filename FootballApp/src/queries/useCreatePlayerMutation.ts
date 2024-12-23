import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayerDto, PlayersType } from "../types";

export const  useCreatePlayerMutation = () => {
    
    const { apiPost } = useApi();
    const queryClient = useQueryClient();
    
    const { mutate, error, isPending } = useMutation({

        mutationKey: ['players', 'create'],
        mutationFn: async (payload: PlayerDto) => {

            return apiPost<PlayersType, PlayerDto>(`players`, payload);
        },
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['players']
            });
        }
    });

    return {
        mutate,
        error,
        isPending
    }
}