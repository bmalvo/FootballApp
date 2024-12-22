import { ChangeEvent, FormEvent, useState } from "react"
import { useCreatePlayerMutation } from "../queries/useCreatePlayerMutation";



export const PlayerForm = () => {

    const { mutate: createPlayer, error, isPending } = useCreatePlayerMutation(); 

    const [formState, setFormState] = useState({
        Imię: "",
        Nazwisko: "",
        Drużyna: ""
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        createPlayer(formState);
        setFormState(
            {
                Imię: "",
                Nazwisko: "",
                Drużyna: ""
            }
        );
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    if(isPending) return <p>Wczytywanie...</p>

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
        {error && <p>{error.message}</p>}
        </form>
    </>
}