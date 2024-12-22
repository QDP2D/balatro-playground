import { EditionEnum, EnhancementEnum, SealEnum, SuitEnum } from "@/types"
import { PlayingCardType } from "@/types/PlayingCardType"
import PlayingCard from "../common/PlayingCard/PlayingCard"


const TWO_OF_HEARTS: PlayingCardType = {
  id: 2,
  edition: EditionEnum.NO_EDITION,
  enhancement: EnhancementEnum.NO_ENHANCEMENT,
  rank: {
    id: 2,
    name: 'two',
    baseChipsValue: 2
  },
  seal: SealEnum.NO_SEAL,
  suit: SuitEnum.HEARTS
}

function GameBoard() {
    return (
        <main className="col-span-9 bg-white">
          <h1>Hello?</h1>
          <PlayingCard card={TWO_OF_HEARTS} />
        {/* <header className="bg-gray-200 text-xl">Main Board</header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-500 p-6 text-white">Widget 1</div>
          <div className="bg-green-500 p-6 text-white">Widget 2</div>
          <div className="bg-purple-500 p-6 text-white">Widget 3</div>
        </section> */}

      </main>
    )
}

export default GameBoard