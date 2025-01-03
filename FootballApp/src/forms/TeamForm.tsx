import { ChangeEvent, FormEvent} from "react";
import { TeamDto} from "../types";
import { useGetPlayersListQuery } from "../queries/useGetPlayersListQuery";
import { StyledButton } from "../StyledWrappers/StyledWrapper";

type TeamFormProps = {

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formState: TeamDto;

}

export const TeamForm = ({ handleSubmit, handleChange, formState, }: TeamFormProps) => {

    const { data: Players } = useGetPlayersListQuery();
    
    const PlayersPickAble = Players?.filter(player => player.Drużyna === '')
    
    const pickedPlayerHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {

        const pickedPlayer: string = e.target.value;
        formState.Zawodnicy.push(pickedPlayer);
    }


    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="Nazwa"
                    id="teamName"
                    value={formState.Nazwa}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="teamName"> Nazwa zespołu</label>
                {!formState.Nazwa && <p>Nazwa jest wymagana!</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="Rok założenia"
                    id="year"
                    value={formState["Rok założenia"]}
                    pattern="\d{4}"
                    title="Podaj czterocyfrowy rok założenia"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="year">Rok założenia drużyny</label>
                {!formState["Rok założenia"] && <p>Rok założenia jest konieczny!</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="Lokalizacja"
                    id="city"
                    value={formState.Lokalizacja}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="city"> Lokalizacja</label>
            </div>
            <div>
                <select onChange={pickedPlayerHandleChange} name="Zawodnicy" id="pickedPlayers">
                    <option value="" >Dodaj zawodnika do drużyny</option>
                    {PlayersPickAble?.map(player =>
                        <option key={player.id}>{player.Imię} {player.Nazwisko}
                        </option>)}
                </select>
                <div>
                    {
                        formState.Zawodnicy?.map((player, id) => <p key={id}>{player}</p>)
                    }
                </div>
            </div>
            
            <StyledButton type="submit">Dodaj</StyledButton>
        </form>
    </>
};