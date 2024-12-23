import { useState } from "react";
import { PlayerForm } from "../../forms/PlayerForm";

export const AddPlayer = () => {

    const [displayAddPlayerForm, setDisplayAddPlayerForm] = useState(false);
    
    const addPlayerFormHandle = () => {

        setDisplayAddPlayerForm(prevState => !prevState);
    }
    
    
    return <>
        {displayAddPlayerForm ? <PlayerForm /> : null}
        <button onClick={addPlayerFormHandle}>Dodaj zawodnika</button>
    </>
};