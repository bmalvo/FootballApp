import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateGamesMutation } from "../../queries/useCreateGamesMutation";
import { GameForm } from "../../forms/GameForm";
import { StyledButton } from "../../StyledWrappers/StyledWrapper";
import { GamesTypeDTO } from "../../types";

export const AddGame = () => {

    const [displayAddGameForm, setDisplayAddGameForm] = useState(false);

    const { mutate: createGame, error, isPending } = useCreateGamesMutation();

    const [formState, setFormState] = useState<GamesTypeDTO>({
    
        'Data spotkania': "",
        'Miejsce spotkania': "",
        'Czas trwania': "",
        Wynik: {
            gospodarz: '',
            gość: ''
        },
        Drużyny: {
            gospodarz: "",
            gość: ""
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
                    [name as keyof typeof prevState]: value,
                };
            }
        });
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        createGame(formState);
        setFormState({

            'Data spotkania': "",
            'Miejsce spotkania': "",
            'Czas trwania': "",
            Wynik: {
                gospodarz: '',
                gość: ''
            },
            Drużyny: {
                gospodarz: "",
                gość: ""
            }
        })
    }

    const handleAddGame = () => {

        setDisplayAddGameForm(prev => !prev)
    }

    if (error) return <p>Wystąpił błąd: {error.message}</p>
    if (isPending) return <p>Wczytywanie danych...</p>

    return <>
        {displayAddGameForm ?
            <GameForm handleChange={handleChange}
                handleSubmit={handleSubmit}
                formState={formState} /> : null
        }
        <StyledButton onClick={handleAddGame}>
            {!displayAddGameForm ? 'Dodaj spotkanie' : 'Anuluj'}
        </StyledButton>
    </>
};