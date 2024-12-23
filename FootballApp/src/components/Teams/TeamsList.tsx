import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { useTeamsList } from "../../hooks/useTeamsList";
import { TeamForm } from "../../forms/TeamForm";
import { SingleTeam } from "./SingleTeam";
import { TeamType } from "../../types";



export const TeamsList = () => {

    const [seeAdTeamForm, setSeeAdTeamForm] = useState(false);
    const {removeTeam} = useTeamsList();

    const { data } = useQuery({

        queryKey: ['teams'],
        queryFn: async () => {
            
            const response = await fetch('http://localhost:3000/teams');
            return response.json();
        }
    })

    if (!data) return <p>Brak drużyn w bazie</p>

    const seeAdTeamFormHandle = () => {

        setSeeAdTeamForm(prevState => !prevState);
    }

    return <>
        <ul>
            {
                data.map((team: TeamType) =>
                <li key={team.id}>
                    <SingleTeam team={team} onTeamRemove={removeTeam} />
                    </li>)
            }
        </ul>
        {seeAdTeamForm? <TeamForm /> : null}
        <button onClick={seeAdTeamFormHandle}>Dodaj drużynę</button>

     </>
}
