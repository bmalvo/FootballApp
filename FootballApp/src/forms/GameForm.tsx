import { ChangeEvent, FormEvent } from "react"
import { GamesTypeDTO } from "../types"

type GameFormProps = {

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    formState: GamesTypeDTO
};

export const GameForm = ({ handleSubmit, handleChange, formState }: GameFormProps) => {

    return <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="date">Data spotkania</label>
                <input
                    type="date"
                    id="date"
                    name="Data spotkania"
                    onChange={handleChange}
                    value={formState["Data spotkania"]}
                />
            </div>
            <div>
            <label htmlFor="place">Miejsce spotkania</label>
                <input
                    type="text"
                    id="place"
                    name="Miejsce spotkania"
                    onChange={handleChange}
                    value={formState["Miejsce spotkania"]} />
            </div>
            <div>
            <label htmlFor="time">Czas trwania spotkania</label>
                <input
                    type="text"
                    id="time"
                    name="Czas trwania"
                    onChange={handleChange}
                    value={formState["Czas trwania"]} />
            </div>
            <label htmlFor="home">Drużyna gospodarzy:</label>
            <input
                type="text"
                id="home"
                name="Drużyny.gospodarz"
                onChange={handleChange}
                value={formState.Drużyny.gospodarz} />
            <label htmlFor="guest">Drużyna gości</label>
            <input
                type="text"
                id="guest"
                name="Drużyny.gość"
                onChange={handleChange}
                value={formState.Drużyny.gość} />
            <div>
            <label htmlFor="goals-home">Bramki gospodarzy: </label>
                <input
                    type="number"
                    id="goals-home"
                    name="Wynik.gospodarz"
                    onChange={handleChange}
                    value={formState.Wynik.gospodarz} />
            <label htmlFor="goals-guest">Bramki gości:</label>
                <input
                    type="number"
                    id="goals-guest"
                    name="Wynik.gość"
                    onChange={handleChange} value={formState.Wynik.gość} />
            </div>
            <button type="submit">Zatwierdź</button>
        </form>
    </>
}