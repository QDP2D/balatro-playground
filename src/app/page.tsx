import GameBoard from "@/components/gameboard";
import Sidebar from "@/components/sidebar";


export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-2 min-h-screen font-mono">
      <Sidebar />
      <GameBoard />
    </div>
  );
}
