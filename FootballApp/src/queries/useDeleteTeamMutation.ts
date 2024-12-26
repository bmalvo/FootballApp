import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { TeamType } from "../types";


export const useDeleteTeamMutation = (teamId: string) => {
    
    const { apiDelete } = useApi();
    const queryClient = useQueryClient();
    
    const {  mutate, isPending } = useMutation({

        mutationKey: ['teams', 'delete', teamId],
        mutationFn: async () => {

            return apiDelete<TeamType>(`teams/${teamId}`)
        },
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['teams']
            })
        }
    })

    return {
        mutate,
        isPending
    }
};