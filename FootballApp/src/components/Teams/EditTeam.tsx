import { ChangeEvent, FormEvent, useState } from "react"
import { EditTeamForm } from "../../forms/EditTeamForm"
import { TeamType } from "../../types"
import { useUpdateTeamMutation } from "../../queries/useUpdateTeamMutation"

type EditTeamProps = {

    team: TeamType
}

export const EditTeam = ({ team }: EditTeamProps) => {

    const {mutate: updateTeam, error, isPending } = useUpdateTeamMutation(team.id);

    const [formState, setFormState] = useState({

        id: team.id,
        Nazwa: team.Nazwa,
        "Rok założenia": team["Rok założenia"],
        Lokalizacja: team.Lokalizacja,
        Zawodnicy: team.Zawodnicy
    });

    const handleSubmit = (e: FormEvent) => {
    
            e.preventDefault();
            updateTeam(formState);
        };
    
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
            setFormState(prevState => ({
    
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }

    return <>
        <EditTeamForm handleSubmit={handleSubmit} handleChange={handleChange} formState={formState}/>
        {/* <form onSubmit={handleSubmit}>
        <div>
            <input
                type="text"
                name="Nazwa"
                id="teamName"
                value={formState.Nazwa}
                onChange={handleChange}
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
                        <option key={player.id}>{player.Imię} {player.Nazwisko} id:{player.id}
                        </option>)}
                </select>
                <div>
                    {
                        formState.Zawodnicy?.map((player, id) => <p key={id}>{player}</p>)
                    }
                </div>
            </div>
            
        <button type="submit">Edytuj</button>
        </form> */}
    </>
}