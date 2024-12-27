import { ChangeEvent, FormEvent, useState } from "react";
import { PlayersType } from "../../types";
import { EditPlayerForm } from "../../forms/EditPlayerForm";
import { useUpdatePlayerMutation } from "../../queries/useUpdatePlayerMutation";

type EditPlayerProps = {

    player: PlayersType;
}

export const EditPlayer = ({ player }: EditPlayerProps) => {


    const { mutate: editPlayer, isPending, error } = useUpdatePlayerMutation(player.id);

    const [formState, setFormState] = useState({
        Imię: player.Imię,
        Nazwisko: player.Nazwisko,
        Drużyna: player.Drużyna
    });

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();
        editPlayer(formState);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFormState(prevState => ({

            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    if (isPending) return <p>Wczytywanie...</p>
    
    
    return <>
        <EditPlayerForm handleSubmit={handleSubmit} handleChange={handleChange} formState={formState} />
        {error && <p>{error.message}</p>}
    </>
};