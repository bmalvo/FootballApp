import { ChangeEvent, FormEvent } from "react"
import { GamesTypeDTO } from "../types"
import { useGetTeamListQuery } from "../queries/useGetTeamListQuery";
import { StyledButton } from "../StyledWrappers/StyledWrapper";

type GameFormProps = {

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    formState: GamesTypeDTO
};

export const GameForm = ({ handleSubmit, handleChange, formState }: GameFormProps) => {

    const { data: teams } = useGetTeamListQuery();
        
    const handlePickedTeamHome = (e: ChangeEvent<HTMLSelectElement>) => {
    
        const pickedTeam = e.target.value;
        formState.Drużyny.gospodarz = pickedTeam;
    }
    
    const handlePickedTeamGuest = (e: ChangeEvent<HTMLSelectElement>) => {
    
        const pickedTeam = e.target.value;
        formState.Drużyny.gość = pickedTeam;
    }

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
            <div>
                <label htmlFor="home">Drużyna gospodarzy:</label>
                <select onChange={handlePickedTeamHome} name="Drużyny" id="home">
                    <option value="">Wybierz drużynę</option>
                    {teams?.map(team => <option key={team.id}>{team.Nazwa}</option>)}
                </select>
            </div>
            <label htmlFor="guest">Drużyna gości</label>
            <label htmlFor="guest">Drużyna gości:</label>
            <select onChange={handlePickedTeamGuest} name="Drużyny" id="guest">
                <option value="">Wybierz drużynę</option>
                {teams?.map(team => <option key={team.id}>{team.Nazwa}</option>)}
            </select>
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
            <StyledButton type="submit">Zatwierdź</StyledButton>
        </form>
    </>
};