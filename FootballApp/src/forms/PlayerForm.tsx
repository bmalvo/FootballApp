import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useCreatePlayer } from "../hooks/useCreatePlayer";
import { PlayersType } from "../types";

type PlayerFormProps = {

    onNewPlayer?: (player: PlayersType) => void;
}

export const PlayerForm = ({onNewPlayer,}: PlayerFormProps) => {

    const { createPlayer, error, loading, data } = useCreatePlayer(); 

    const [formState, setFormState] = useState({
        Imię: "",
        Nazwisko: "",
        Drużyna: ""
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(formState)
        createPlayer(formState);
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
        onNewPlayer?(data):null
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
            {!formState.Imię && <p>Imię jest wymagane!</p>}
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
                {!formState.Nazwisko && <p>Nazwisko jest wymagane!</p>}
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
            
        <button type="submit">dodaj</button>
        {error && <p>{error}</p>}
        </form>
    </>
}