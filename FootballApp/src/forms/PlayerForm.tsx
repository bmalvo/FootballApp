import { ChangeEvent, FormEvent, useState } from "react"
import fs from "fs";

export const PlayerForm = () => {

    const [formState, setFormState] = useState({

        name: "",
        surname: "",
        team: ""
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return <form onSubmit={handleSubmit}>
        <div>
        <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="name"> Imię</label>
        {!formState.name && <p>Imię jest wymagane!</p>}
        </div>
        <div>
        <input type="text" name="surname" id="surname" value={formState.surname} onChange={handleChange} />
        <label htmlFor="surname"> Nazwisko</label>
        {!formState.surname && <p>Nazwisko jest wymagane!</p>}        </div>
        <div>
        <input type="text" name="team" id="team" value={formState.team} onChange={handleChange}/>
        <label htmlFor="team"> Drużyna</label>
        </div>
        <button type="submit">dodaj</button>
    </form>
}