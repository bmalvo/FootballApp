import { useQuery } from "@tanstack/react-query"

type Teams = {

    id: number;
    Nazwa: string;
    'Rok założenia': string;
    Lokalizacja: string;
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
