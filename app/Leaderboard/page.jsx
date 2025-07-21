'use client';

import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.gameswin - a.gameswin);
        setUsers(sorted);
      });
  }, []);

  return (
    <div className="leaderboard-container p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard!</h1>

      <table className="score-container w-full table-auto border-collapse text-center">
        <thead>
          <tr className="text-blue-700 font-semibold border-b">
            <th className="p-2">Rank</th>
            <th className="p-2">Username</th>
            <th className="p-2">Wins</th>
            <th className="p-2">Loss</th>
            <th className="p-2">Winrate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const losses = user.games - user.gameswin;
            const winrate =
              user.games > 0
                ? ((user.gameswin / user.games) * 100).toFixed(1) + '%'
                : '0%';

            return (
              <tr
                key={user._id || user.id || index}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.gameswin}</td>
                <td className="p-2">{losses}</td>
                <td className="p-2">{winrate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
