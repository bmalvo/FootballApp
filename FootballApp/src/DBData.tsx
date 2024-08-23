import { useQuery } from "@tanstack/react-query"

type Player = {

    id: number;
    Imię: string;
    Nazwisko: string;
    Drużyna: string;
}

type Teams = {

    id: number;
    Nazwa: string;
    'Rok założenia': string;
    Lokalizacja: string;
}

type Games = {

    id: number;
    'Data spotkania': string;
    "Tytuł rozgrywki": string;
    "Miejsce spotkania": string;
    "Czas trwania": string;
    "Wynik": string;
    "Drużyny": string;
}

export const Players = () => {

    const { data } = useQuery({

        queryKey: ['players'],
        queryFn: async () => {
            
            const response = await fetch('http://localhost:3000/players');
            return response.json() as Promise<Player[]>;
        }
    })

    if (!data) return <p>Brak zawodników w bazie</p>

    return <ul>
        {data.map(el => <li key={el.id}>{el.Imię} { el.Nazwisko}</li>)}
    </ul>
}

export const Teams = () => {

    const { data } = useQuery({

        queryKey: ['teams'],
        queryFn: async () => {
            
            const response = await fetch('http://localhost:3000/teams');
            return response.json() as Promise<Teams[]>;
        }
    })

    if (!data) return <p>Brak drużyn w bazie</p>

    return <ul>
        {data.map(el => <li key={el.id}> {el.Nazwa}</li>)}
    </ul>
}

export const Games = () => {

    const { data } = useQuery({

        queryKey: ['games'],
        queryFn: async () => {
            
            const response = await fetch('http://localhost:3000/games');
            return response.json() as Promise<Games[]>
        }
    })

    if (!data) return <p>Brak rozgrywek do wyświetlenia</p>

    return <ul>
        {data.map(el => <li key={el.id}>{el.Drużyny} { el.Wynik}</li>)}
    </ul>
}