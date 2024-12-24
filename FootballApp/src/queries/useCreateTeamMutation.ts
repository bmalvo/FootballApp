import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import { TeamDto, TeamType } from "../types";

export const useCreateTeamMutation = () => {

    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { mutate, error, isPending } = useMutation({
        
        mutationKey: ['teams', 'create'],
        mutationFn: async( payload: TeamDto) => {

            return apiPost<TeamType, TeamDto>('teams', payload);
        },

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['teams']
            });
        }
    })

    return {

        mutate,
        error,
        isPending
    }
}