import { useGetGamesQuery } from "../../queries/useGetGamesQuery";


export const TeamRanking = () => {
   const { data: games, isPending: gamesPending } = useGetGamesQuery();

  if (gamesPending || !games) {
    return <div>Wczytywanie danych...</div>; 
  }

  // Calculate team goals
  const teamGoals: { [key: string]: number } = games.reduce((acc, game) => {
    const hostTeam = game.Drużyny.gospodarz;
    const guestTeam = game.Drużyny.gość;
    const hostGoals = parseInt(game.Wynik.gospodarz, 10);
    const guestGoals = parseInt(game.Wynik.gość, 10);

    // Update the goals for each team
    acc[hostTeam] = (acc[hostTeam] || 0) + hostGoals;
    acc[guestTeam] = (acc[guestTeam] || 0) + guestGoals;

    return acc;
  }, {} as { [key: string]: number });

  // Sort teams by total goals in descending order
  const sortedTeams = Object.entries(teamGoals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3); // Get the top 3

  return (
    <div>
      <ul>
        {sortedTeams.map(([teamName, goals], index) => (
          <li key={index}>
            <strong>{ index+1}</strong> -  {teamName}: {goals} goals
          </li>
        ))}
      </ul>
    </div>
  );
};