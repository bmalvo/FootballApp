import { ChangeEvent, FormEvent, useState } from "react";
import { useUpdateGameMutation } from "../../queries/useUpdateGameMutation";
import { GamesType } from "../../types"
import { GameForm } from "../../forms/GameForm";

type EditGameProps = {

    game: GamesType;
}

export const EditGame = ({ game }: EditGameProps) => {

    const { mutate: updateGame, error, isPending } = useUpdateGameMutation(game.id);
    
    const [formState, setFormState] = useState({
    
        
        'Data spotkania': game["Data spotkania"],
        'Miejsce spotkania': game["Miejsce spotkania"],
        'Czas trwania': game["Czas trwania"],
        Wynik: {
            gospodarz: game.Wynik.gospodarz,
            gość: game.Wynik.gość
        },
        Drużyny: {
            gospodarz: game.Drużyny.gospodarz,
            gość: game.Drużyny.gość
        }
    });
    
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        setFormState((prevState) => {
            if (name.includes(".")) {
                const [nestedKey, nestedValueKey] = name.split(".");
    
        
                return {
                    ...prevState,
                    [nestedKey]: {
                        ...prevState[nestedKey],
                        [nestedValueKey]: value
                    },
                };
            } else {
                console.log(formState)
                return {
                    ...prevState,
                    [name]: value,
                };
            }
        });
    };
    
        
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        updateGame(formState);
        setFormState({
    
            'Data spotkania': "",
            'Miejsce spotkania': "",
            'Czas trwania': "",
            Wynik: {
                gospodarz: 0,
                gość: 0
            },
            Drużyny: {
                gospodarz: "",
                gość: ""
            }
        })
    }
    
    
    if (error) return <p>Wystąpił błąd: {error.message}</p>
    if (isPending) return <p>Wczytywanie danych...</p>
    
    return <>
        <GameForm handleChange={handleChange}
            handleSubmit={handleSubmit}
            formState={formState} />
    </>
};