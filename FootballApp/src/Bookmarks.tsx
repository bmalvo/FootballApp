import { useState } from "react"
import { PlayersList } from "./PlayersList";
import { TeamsList } from "./TeamsList";
import { Games } from "../../GamesList";
import { Statistics } from "./Statistics";

export const Bookmarks = () => {

    const [displayPlayers, setDisplayPlayers] = useState(false);
    const [displayTeams, setDisplayTeams] = useState(false);
    const [displayGames, setDisplayGames] = useState(false);
    const [displayStatistics, setDisplayStatistics] = useState(false);

    const togglePlayers = () => {
        setDisplayPlayers(prev => !prev)
        setDisplayTeams(false)
        setDisplayGames(false)
        setDisplayStatistics(false)

    };
    const toggleTeams = () => {
        setDisplayTeams(prev => !prev)
        setDisplayPlayers(false)
        setDisplayGames(false)
        setDisplayStatistics(false)
    };
    const toggleGames = () => {
        setDisplayGames(prev => !prev)
        setDisplayPlayers(false)
        setDisplayTeams(false)
        setDisplayStatistics(false)
    };
    const toggleStatistics = () => {
        setDisplayStatistics(prev => !prev)
        setDisplayPlayers(false)
        setDisplayGames(false)
        setDisplayTeams(false)
    };

    return <>
        <div className='bookmark'>
        <button onClick={togglePlayers}>Baza graczy</button>
        <button onClick={toggleTeams}>Baza drużyn</button>
        <button onClick={toggleGames}>Baza rozgrywek</button>
        <button onClick={toggleStatistics}>Statystyki</button>
        {displayPlayers ? <PlayersList /> : null}
        {displayTeams ? <TeamsList/> : null}
        {displayGames ? <Games/> : null}
        {displayStatistics ? <Statistics/> : null}
        </div>
    </>
}
