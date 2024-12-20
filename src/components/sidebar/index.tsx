import MiscRow from "./MiscRow"
import ScoringRow from "./ScoringRow"
import TitleRow from "./TitleRow"

function Sidebar() {
    return (
        <aside className="col-span-3 bg-gray-800 block flex flex-col gap-2 mx-2 p-2 text-white">
            <TitleRow />
            <ScoringRow />
            <MiscRow />
        </aside>
    )
}

export default Sidebar