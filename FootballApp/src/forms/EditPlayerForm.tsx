import { ChangeEvent, FormEvent} from "react"
import { PlayerDto } from "../types";


type EditPlayerFormProps = {

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formState: PlayerDto;
}

export const EditPlayerForm = ({ handleSubmit, handleChange, formState }: EditPlayerFormProps) => {
    
   
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
        </form>
    </>
};