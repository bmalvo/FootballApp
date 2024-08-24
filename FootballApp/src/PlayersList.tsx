import { useQuery } from "@tanstack/react-query"

type Player = {

    id: number;
    Imię: string;
    Nazwisko: string;
    Drużyna: string;
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
