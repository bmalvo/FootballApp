import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"

export const useUpdateTeamMutation = (teamId: string) => {

    const { apiEdit } = useApi();
    const queryClient = useQueryClient();

    const { mutate, error, isPending} = useMutation({
        
        mutationKey: ['teams', 'update', teamId],
        mutationFn: async (payload) => {
            
            return apiEdit(`teams/${teamId}`, payload)
        },

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['teams']
            })
        }
    })
    
    return {

        mutate,
        error,
        isPending
    }
}