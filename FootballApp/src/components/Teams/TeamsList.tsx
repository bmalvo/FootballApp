import { SingleTeam } from "./SingleTeam";
import { TeamType } from "../../types";
import { useGetTeamListQuery } from "../../queries/useGetTeamListQuery";
import { AddTeam } from "./AddTeam";


export const TeamsList = () => {

    const { data: teams, error, isFetching } = useGetTeamListQuery();

    if (!teams) return <p>Brak drużyn w bazie</p>
    if (isFetching) return <p>Wczytywanie danych...</p>
    if (error) return <p>Wystąpił błąd: {error.message}</p>
    
    
    return <>
        <ul>
            {
                teams.map((team: TeamType) =>
                    <li key={team.id}>
                        <SingleTeam team={team} />
                    </li>)
            }
        </ul>
        <AddTeam />
    </>
};