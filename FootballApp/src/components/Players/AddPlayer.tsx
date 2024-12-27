import { ChangeEvent, FormEvent, useState } from "react";
import { PlayerForm } from "../../forms/PlayerForm";
import { useCreatePlayerMutation } from "../../queries/useCreatePlayerMutation";


export const AddPlayer = () => {

    const [displayAddPlayerForm, setDisplayAddPlayerForm] = useState(false);
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

    if (isPending) return <p>Wczytywanie...</p>
    
    const addPlayerFormHandle = () => {

        setDisplayAddPlayerForm(prevState => !prevState);
    }
    
    
    return <>
        <div>

            {displayAddPlayerForm ? <PlayerForm handleSubmit={handleSubmit} handleChange={handleChange} formState={formState} isPending={isPending} /> : null}
            <button onClick={addPlayerFormHandle}>
                {displayAddPlayerForm? 'Anuluj' : 'Dodaj zawodnika'}
            </button>
            {error && <p>{error.message}</p>}
        </div>
    </>
};