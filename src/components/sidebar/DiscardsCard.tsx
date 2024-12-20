function DiscardsCard() {
    const remainingDiscards = 0
    return (
        <div className="basis-1/2 bg-gray-900 flex flex-col rounded">
            <div className="basis-1/4">Discards</div>
            <div className="basis-3/4 bg-gray-700 content-center mb-1 ml-1 mr-1 rounded text-red-300 text-2xl">
                {remainingDiscards}
            </div>
        </div>
    )
}

export default DiscardsCard