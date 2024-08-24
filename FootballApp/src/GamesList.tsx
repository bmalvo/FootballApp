import { useQuery } from "@tanstack/react-query"

type Games = {

    id: number;
    'Data spotkania': string;
    "Tytuł rozgrywki": string;
    "Miejsce spotkania": string;
    "Czas trwania": string;
    "Wynik": string;
    "Drużyny": string;
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