export type PlayersType = {
        
    id: string;
    Imię: string;
    Nazwisko: string;
    Drużyna: string;
};


export type PlayerDto = Omit<PlayersType, 'id'>

export type TeamType = {
        
    id: string;
    Nazwa: string;
    "Rok założenia": string;
    Lokalizacja: string;
    Zawodnicy: string[];
};

export type TeamDto = Omit<TeamType, 'id'>