import MiscRow from "./MiscRow"
import ScoringRow from "./ScoringRow"
import TitleRow from "./TitleRow"

function Sidebar() {
    return (
        <aside className="col-span-3 bg-gray-800 text-white gap-1 block flex flex-col">
            <TitleRow />
            <ScoringRow />
            <MiscRow />
        </aside>
    )
}

export default Sidebar