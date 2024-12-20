import GameBoard from "@/components/GameBoard";
import Sidebar from "@/components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="grid grid-cols-12 gap-2 min-h-screen font-mono">
      <Sidebar />
      <GameBoard />
    </div>
  );
}
