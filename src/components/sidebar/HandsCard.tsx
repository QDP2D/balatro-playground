import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function HandsCard() {
    const remainingHands = 1
    return (
        <div className="basis-1/2 bg-gray-900 flex flex-col rounded">
            <div className="basis-1/4">Hands</div>
            <div className="basis-3/4 bg-gray-700 content-center grid grid-cols-4 mb-1 ml-1 mr-1 rounded text-blue-300 text-2xl">
                <div className="col-span-3 self-center">{remainingHands}</div>
                <div className="col-span-1 flex flex-col ">
                    <AiFillCaretUp className="hover:text-white"/>
                    <AiFillCaretDown className="hover:text-white"/>
                </div>
            </div>
        </div>
    )
}

export default HandsCard