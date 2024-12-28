import { ChangeEvent, FormEvent} from "react"
import { PlayerDto } from "../types";
import { useGetTeamListQuery } from "../queries/useGetTeamListQuery";
import { StyledButton } from "../StyledWrappers/StyledWrapper";


type EditPlayerFormProps = {

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formState: PlayerDto;
}

export const EditPlayerForm = ({ handleSubmit, handleChange, formState }: EditPlayerFormProps) => {

    const { data: teams } = useGetTeamListQuery();
        
        const handlePickedTeam = (e: ChangeEvent<HTMLSelectElement>) => {
    
            const pickedTeam = e.target.value;
            formState.Drużyna = pickedTeam;
        }
    
   
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
                <select onChange={handlePickedTeam} name="Drużyna" id="team">
                    <option value="">Wybierz drużynę</option>
                    {teams?.map(team => <option key={team.id}>{ team.Nazwa}</option>)}
                </select>
            </div>
            
            <StyledButton type="submit">Edytuj</StyledButton>
        </form>
    </>
};