import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { TeamType } from "../types";
import { useCreateTeam } from "../hooks/useCreateTeam";
import { usePlayerList } from "../hooks/usePlayerList";
import { useEditPlayer } from "../hooks/useEditPlayer";
import { SinglePlayer } from "../SinglePlayer";

type TeamFormProps = {

    onNewTeam?: (team: TeamType) => void;
}

export const TeamForm = ({ onNewTeam }: TeamFormProps) => {

    const { createTeam, error, loading, data } = useCreateTeam(); 
    const { data: playersList } = usePlayerList();

    // const [pickedPlayers, setPickedPlayers] = useState();

    const forPickplayersList = playersList?.filter(player => player.object.Drużyna === '')

    const [formState, setFormState] = useState({
        Nazwa: "",
        'Rok założenia': "",
        Lokalizacja: "",
        Zawodnicy: [] as string[]
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(formState);
        // createTeam(formState);

        const TeamName = formState.Nazwa
        formState.Zawodnicy.map(player => {
            console.log(player.slice(-4));
            const playerID = player.slice(-4)
            const { editPlayer } = useEditPlayer(playerID);

            editPlayer((prevState: any) => ({
                ...prevState,
                "Drużyna": TeamName
            }));

        })

        setFormState({

            Nazwa: "",
            'Rok założenia': "",
            Lokalizacja: "",
            Zawodnicy: []
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // let pickedPlayers: string[] = []

    const pickedPlayerHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {

        console.log(e.target.value)
        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: formState.Zawodnicy.concat([e.target.value])
        }
    ))
        
        console.log(formState.Zawodnicy)
    }

    useEffect(() => {
        if(!data) return
        onNewTeam? data : null
    },[data])

    if(loading) return <p>Wczytywanie...</p>

    return <>
        <form onSubmit={handleSubmit}>
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
                    {forPickplayersList?.map(player => <option key={player.id}>{player.object.Imię} {player.object.Nazwisko} id:{ player.id}</option>)}
                </select>
                <div>
                    {formState.Zawodnicy.map((player,id) => <p key={id}>{ player}</p>)}
                </div>
            </div>
            
        <button type="submit">dodaj</button>
        {error && <p>{error}</p>}
        </form>
    </>
}