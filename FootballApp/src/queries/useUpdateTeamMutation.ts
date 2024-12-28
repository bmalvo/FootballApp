import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import { TeamDto, TeamType } from "../types";

export const useUpdateTeamMutation = (teamId: string) => {

    const { apiEdit } = useApi();
    const queryClient = useQueryClient();

    const { mutate, error, isPending } = useMutation({
        
        mutationKey: ['teams', 'update', teamId],
        mutationFn: async (payload: TeamDto) => {
            
            return apiEdit<TeamType, TeamDto>(`teams/${teamId}`, payload)
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
};