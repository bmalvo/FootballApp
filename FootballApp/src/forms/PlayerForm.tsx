import { ChangeEvent, FormEvent} from "react"
import { PlayerDto } from "../types";

type PlayerFormProps = {

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formState: PlayerDto;
    isPending: boolean;

}

export const PlayerForm = ({ handleSubmit, handleChange, formState, isPending }: PlayerFormProps) => {

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
            <button disabled={isPending} type="submit">Dodaj</button>
        </form>
    </>
};