function ScoringRow() {
    return (
        <div className="basis-1/3 gap-2 flex flex-col">
            <div className="basis-1/3 bg-gray-900 gap-2 rounded">
                Score
            </div>
            <div className="basis-2/3 bg-gray-900 gap-2 rounded">
                Hand Info
            </div>
        </div>
    )
}

export default ScoringRow