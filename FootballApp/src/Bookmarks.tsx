import { useState } from "react"
import { PlayersList } from "./PlayersList";
import { TeamsList } from "./TeamsList";
import { Games } from "./GamesList";
import { Statistics } from "./Statistics";

export const Bookmarks = () => {

    const [seePlayers, setPlayers] = useState(false);
    const [seeTeams, setTeams] = useState(false);
    const [seeGames, setGames] = useState(false);
    const [seeStatistics, setStatistics] = useState(false);

    const togglePlayers = () => {
        setPlayers(true)
        setTeams(false)
        setGames(false)
        setStatistics(false)

    };
    const toggleTeams = () => {
        setTeams(true)
        setPlayers(false)
        setGames(false)
        setStatistics(false)
    };
    const toggleGames = () => {
        setGames(true)
        setPlayers(false)
        setTeams(false)
        setStatistics(false)
    };
    const toggleStatistics = () => {
        setStatistics(true)
        setPlayers(false)
        setGames(false)
        setTeams(false)
    };

    return <>
        <div className='bookmark'>
        <button onClick={togglePlayers}>Baza graczy</button>
        <button onClick={toggleTeams}>Baza drużyn</button>
        <button onClick={toggleGames}>Baza rozgrywek</button>
        <button onClick={toggleStatistics}>Statystyki</button>
        {seePlayers ? <PlayersList /> : null}
        {seeTeams ? <TeamsList/> : null}
        {seeGames ? <Games/> : null}
        {seeStatistics ? <Statistics/> : null}
        </div>
    </>
}
