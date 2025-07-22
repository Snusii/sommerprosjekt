'use client';
import React from 'react';
import { useEffect, useState } from 'react';



export default function CsTable() {
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
    <div className="overflow-x-auto">
      <table className="score-container table-auto border-collapse ">
        <thead>
          <tr className="border">
            <th className="title-text padding">Rank</th>
            <th className="title-text padding">Username</th>
            <th className="title-text padding">Wins</th>
            <th className="title-text padding">Loss</th>
            <th className="title-text padding">Winrate</th>
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
                className="border"
              >
                <td className="padding">{index + 1}</td>
                <td className="padding">{user.username}</td>
                <td className="padding">{user.gameswin}</td>
                <td className="padding">{losses}</td>
                <td className="padding">{winrate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
