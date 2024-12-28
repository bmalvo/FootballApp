import { useGetGamesQuery } from "../../queries/useGetGamesQuery";

// interface GameType {
//   "Data spotkania": string;
//   "Miejsce spotkania": string;
//   "Czas trwania": string;
//   "Wynik": {
//     "gospodarz": string;
//     "gość": string;
//   };
//   "Drużyny": {
//     "gospodarz": string;
//     "gość": string;
//   };
//   "id": string;
// }


export const TeamRanking = () => {
   const { data: games, isPending: gamesPending } = useGetGamesQuery();

  if (gamesPending || !games) {
    return <div>Wczytywanie danych...</div>; // Show a loading state while fetching
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
      <h2>Top 3 Teams</h2>
      <ul>
        {sortedTeams.map(([teamName, goals], index) => (
          <li key={index}>
            {teamName}: {goals} goals
          </li>
        ))}
      </ul>
    </div>
  );
};