import RunInfoButton from "./RunInfoButton"

function MiscRow() {
    return (
        <div className="basis-1/3 flex gap-2">
            {/* Run Info and Options */}
            <div className="basis-1/3 flex flex-col gap-2">
                <RunInfoButton />
                <div className="basis-1/2 bg-yellow-500 rounded">options</div>
            </div>
            {/* Hands, Discards, Money, Ante, Round */}
            <div className="basis-2/3 flex flex-col gap-2">
                <div className="basis-1/3 flex gap-2">
                    <div className="basis-1/2 bg-gray-900 rounded">Hands</div>
                    <div className="basis-1/2 bg-gray-900 rounded">Discards</div>
                </div>
                <div className="basis-1/3 flex">
                    <div className="bg-gray-900 grow rounded max-h-full ">$$$</div>
                </div>
                <div className="basis-1/3 flex gap-2">
                    <div className="basis-1/2 bg-gray-900 rounded">Ante</div>
                    <div className="basis-1/2 bg-gray-900 rounded">Round</div>
                </div>
            </div>
        </div>
    )
}

export default MiscRow

/*
className="col-span-3 bg-gray-800 text-white p-1 block flex flex-col"
*/