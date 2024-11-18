export type PlayersType = {
    id: string,
    object: {
        
        id: string;
        Imię: string;
        Nazwisko: string;
        Drużyna: string;
    }
}

export type PlayerDto = {

    object: object;
}

export type TeamType = {
    
    id: string,
        object: {
        
        id: string;
        Nazwa: string;
        "Rok założenia": string;
        Lokalizacja: string;
    }
}

export type TeamDto = {

    object: object;
}