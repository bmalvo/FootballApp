import { ChangeEvent, FormEvent, useState } from "react"
import { EditTeamForm } from "../../forms/EditTeamForm"
import { TeamType } from "../../types"
import { useUpdateTeamMutation } from "../../queries/useUpdateTeamMutation"

type EditTeamProps = {

    team: TeamType
}

export const EditTeam = ({ team }: EditTeamProps) => {

    const { mutate: updateTeam, error, isPending } = useUpdateTeamMutation(team.id);

    const [formState, setFormState] = useState({

        id: team.id,
        Nazwa: team.Nazwa,
        "Rok założenia": team["Rok założenia"],
        Lokalizacja: team.Lokalizacja,
        Zawodnicy: team.Zawodnicy
    });

    const handleSubmit = (e: FormEvent) => {
    
        e.preventDefault();
        updateTeam(formState);
    };
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
        setFormState(prevState => ({
    
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    if (error) return <p>Wystąpił błąd: {error.message}</p>
    if (isPending) return <p>Wczytywanie danych...</p>

    return <>
        <EditTeamForm handleSubmit={handleSubmit} handleChange={handleChange} formState={formState} team={team} />
    </>
};