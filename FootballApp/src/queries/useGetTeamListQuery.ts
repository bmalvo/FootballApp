import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamType } from "../types";

export const useGetTeamListQuery = () => {

    const { apiGet } = useApi();

    const { data, error, isFetching } = useQuery({

        queryKey: ['teams'],
        queryFn: async () => {

            return apiGet<TeamType[]>('teams')
        }
    })

    return {

        data,
        error,
        isFetching
    }
};