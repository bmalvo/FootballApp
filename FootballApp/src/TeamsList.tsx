import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { useTeamsList } from "./hooks/useTeamsList";
import { TeamForm } from "./forms/TeamForm";
import { SingleTeam } from "./SingleTeam";

type Teams = {

    id: number;
    Nazwa: string;
    'Rok założenia': string;
    Lokalizacja: string;
}

export const TeamsList = () => {

    const [seeAdTeamForm, setSeeAdTeamForm] = useState(false);
    const {teamsList, removeTeam} = useTeamsList();

    // const { data } = useQuery({

    //     queryKey: ['teams'],
    //     queryFn: async () => {
            
    //         const response = await fetch('http://localhost:3000/teams');
    //         return response.json() as Promise<Teams[]>;
    //     }
    // })

    if (!teamsList) return <p>Brak drużyn w bazie</p>

    const seeAdTeamFormHandle = () => {

        setSeeAdTeamForm(prevState => !prevState);
    }

    return <>
        <ul>
            {teamsList.map(team =>
                <li key={team.id}>
                    <SingleTeam team={team} onTeamRemove={removeTeam} />
                </li>)}
        </ul>
        {seeAdTeamForm? <TeamForm /> : null}
        <button onClick={seeAdTeamFormHandle}>Dodaj drużynę</button>

     </>
}
