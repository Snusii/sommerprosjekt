'use client'
import { useState } from 'react';
import TableRenderer from './components/TableRenderer';

export default function Leaderboard() {
  const [ currentTable, setCurrentTable ] = useState("");
  return (
    <div className="leaderboard-container p-4 max-w-2xl mx-auto mb-20">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <div className="game-container">
        <img onClick={() => setCurrentTable("CsTable")} className="p-2" src="/Images/cs-icon.svg" alt="CS icon"/>
        <img onClick={() => setCurrentTable("ValorantTable")}className="p-2" src="/Images/valorant-icon.svg" alt="Valorant icon"/>
        <img onClick={() => setCurrentTable("OverwatchTable")}className="p-2" src="/Images/overwatch-icon.svg" alt="Overwatch icon"/>
      </div>
      <div className="min-h-[400px] transition-all duration-300 ease-in-out">
        <TableRenderer currentTable={currentTable} />
      </div>
      
    </div>
  );
}
