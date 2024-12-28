import { useState } from "react"
import { PlayersList } from "./components/Players/PlayersList";
import { TeamsList } from "./components/Teams/TeamsList";
import { Games } from "./components/Games/GamesList";
import { Statistics } from "./components/Statistics/Statistics";
import { StyledButton } from "./StyledWrappers/StyledWrapper";

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
            <StyledButton onClick={togglePlayers}>Baza graczy</StyledButton>
            <StyledButton onClick={toggleTeams}>Baza drużyn</StyledButton>
            <StyledButton onClick={toggleGames}>Baza rozgrywek</StyledButton>
            <StyledButton onClick={toggleStatistics}>Statystyki</StyledButton>
            {displayPlayers ? <PlayersList /> : null}
            {displayTeams ? <TeamsList /> : null}
            {displayGames ? <Games /> : null}
            {displayStatistics ? <Statistics /> : null}
        </div>
    </>
};