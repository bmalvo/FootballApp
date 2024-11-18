import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { TeamType } from "../types";
import { useCreateTeam } from "../hooks/useCreateTeam";

type TeamFormProps = {

    onNewTeam?: (team: TeamType) => void;
}

export const TeamForm = ({ onNewTeam }: TeamFormProps) => {
    
    //  Tutaj! dokoncz formularz dodający druzyne!!! 

    const { createTeam, error, loading, data } = useCreateTeam(); 

    const [formState, setFormState] = useState({
        Nazwa: "",
        'Rok założenia': "",
        Lokalizacja: ""
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(formState)
        createTeam(formState);
        setFormState({

            Nazwa: "",
            'Rok założenia': "",
            Lokalizacja: ""
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        if(!data) return
        onNewTeam? data : null
    },[data])

    if(loading) return <p>Wczytywanie...</p>

    return <>
        <form onSubmit={handleSubmit}>
        <div>
            <input
                type="text"
                name="Nazwa"
                id="teamName"
                value={formState.Nazwa}
                onChange={handleChange}
            />
            <label htmlFor="teamName"> Nazwa zespołu</label>
            {!formState.Nazwa && <p>Nazwa jest wymagana!</p>}
            </div>
        <div>
            <input
                type="text"
                name="Rok założenia"
                id="year"
                value={formState["Rok założenia"]}
                pattern="\d{4}"
                title="Podaj czterocyfrowy rok założenia"
                onChange={handleChange}
            />
            <label htmlFor="year">Rok założenia drużyny</label>
            {!formState["Rok założenia"] && <p>Rok założenia jest konieczny!</p>}
        </div>
        <div>
            <input
                type="text"
                name="Lokalizacja"
                id="city"
                value={formState.Lokalizacja}
                onChange={handleChange}
                // required    
             />
            <label htmlFor="city"> Lokalizacja</label>
            </div>
            
        <button type="submit">dodaj</button>
        {error && <p>{error}</p>}
        </form>
    </>
}