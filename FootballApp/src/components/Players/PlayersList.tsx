import { SinglePlayer } from "./SinglePlayer";
import { useGetPlayersListQuery } from "../../queries/useGetPlayersListQuery";
import { PlayersType } from "../../types";
import { AddPlayer } from "./AddPlayer";


export const PlayersList = () => {

    const { data, error, isFetching } = useGetPlayersListQuery();

    if (isFetching) return <p>Wczytywanie zawodników...</p>
    if (error) return <p>Wystąpił problem: {error.message}</p>
    if (!data) return <p>Brak zawodników w bazie</p>


    return <>
        <ul>
            {data.map((el: PlayersType) => <SinglePlayer key={el.id} player={el} />)}
        </ul>
        <AddPlayer />
    </>
};