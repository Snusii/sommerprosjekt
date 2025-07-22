import CsTable from "./CsTable";
import OverwatchTable from "./OverwatchTable";
import ValorantTable from "./ValorantTable";

export default function TableRenderer({ currentTable }) {
  const getTable = () => {
    switch (currentTable) {
      case 'ValorantTable':
        return <ValorantTable/>;
      case 'OverwatchTable':
        return <OverwatchTable/>;
      default:
        return <CsTable/>;
    }
  };

  return <>{getTable()}</>;
}