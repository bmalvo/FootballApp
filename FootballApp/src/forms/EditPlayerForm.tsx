import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { PlayersType } from "../types";
import { useEditPlayer } from "../hooks/useEditPlayer";

type PlayerFormProps = {

    onEdit?: (player: PlayersType) => void;
    player: PlayersType;
}

export const EditPlayerForm = ({ onEdit, player }: PlayerFormProps) => {
    
    console.log(player.id)

    const { editPlayer, error, loading, data } = useEditPlayer(player.id); 

    const [formState, setFormState] = useState({
        Imię: player.object.Imię,
        Nazwisko: player.object.Nazwisko,
        Drużyna: player.object.Drużyna
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        editPlayer(formState);
        setFormState({

            Imię: "",
            Nazwisko: "",
            Drużyna: ""
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        if(!data) return
        onEdit?(data):null
    },[data])

    if(loading) return <p>Wczytywanie...</p>

    return <>
        <form onSubmit={handleSubmit}>
        <div>
            <input
                type="text"
                name="Imię"
                id="name"
                value={formState.Imię}
                onChange={handleChange}
            />
            <label htmlFor="name"> Imię</label>
            {formState.Imię === '' && <p>Imię jest wymagane!</p>}
        </div>
        <div>
            <input
                type="text"
                name="Nazwisko"
                id="surname"
                value={formState.Nazwisko}
                onChange={handleChange}
            />
            <label htmlFor="surname"> Nazwisko</label>
            {formState.Nazwisko === '' && <p>Nazwisko jest wymagane!</p>}
        </div>
        <div>
            <input
                type="text"
                name="Drużyna"
                id="team"
                value={formState.Drużyna}
                onChange={handleChange}
             />
            <label htmlFor="team"> Drużyna</label>
            </div>
            
        <button type="submit">Edytuj</button>
        {error && <p>{error}</p>}
        </form>
    </>
}