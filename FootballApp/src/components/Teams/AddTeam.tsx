import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateTeamMutation } from "../../queries/useCreateTeamMutation";
import { TeamForm } from "../../forms/TeamForm";
import { StyledButton } from "../../StyledWrappers/StyledWrapper";

export const AddTeam = () => {

    const [displayAddTeamForm, setDisplayAddTeamForm] = useState(false);
    const { mutate: createTeam, error, isPending } = useCreateTeamMutation();

    const [formState, setFormState] = useState({
        Nazwa: '',
        "Rok założenia": '',
        Lokalizacja: '',
        Zawodnicy: []
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        createTeam(formState);
        setFormState(
            {
                Nazwa: '',
                "Rok założenia": '',
                Lokalizacja: '',
                Zawodnicy: []
            }
        )
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    if (isPending) return <p>Wczytywanie...</p>
    
    const addTeamFormHandle = () => {

        setDisplayAddTeamForm(prevState => !prevState);
    }
    
    
    return <>
        {displayAddTeamForm ? <TeamForm handleSubmit={handleSubmit} handleChange={handleChange} formState={formState} /> : null}
        <StyledButton onClick={addTeamFormHandle}>
            {displayAddTeamForm ? 'Anuluj' : 'Dodaj drużynę'}
        </StyledButton>
        {error && <p>{error.message}</p>}
    </>
};