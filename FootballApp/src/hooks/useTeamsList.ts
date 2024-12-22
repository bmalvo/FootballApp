import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { TeamType } from "../types";

export const useTeamsList = () => {

    const { apiGet } = useApi()
    const [teamsList, setTeamsList] = useState<TeamType[]>();

    const getTeams = async () => {
        
        const response = await apiGet('teams');
        if (response) setTeamsList(response as TeamType[]);
    }

    const removeTeam = (id: string) => {
        
        alert('Czy napewno chcesz usunąć tę drużynę?')
        setTeamsList(prevTeams => prevTeams?.filter(
            team => team.object.id !== id))
    }

    const addTeam = (team: TeamType) => {

        setTeamsList(prevTeams => [...(prevTeams || []), team]);
        
    };
        useEffect(() => {
            
            getTeams();
            console.log()
        }, [])
    
    return {

        teamsList,
        removeTeam,
        addTeam
    }
}

