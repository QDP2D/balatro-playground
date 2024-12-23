import { PlayingCardType } from "@/types/PlayingCardType"
import Image from "next/image"

interface PlayingCardProps {
    card: PlayingCardType
}

function PlayingCard({ card } : PlayingCardProps) {

    return (
        <div>
            <Image
                alt=""
                className="object-scale-down"
                height={100}
                src={`/img/playingCards/${card.suit}/${card.edition}/${card.enhancement}/${card.seal}/${card.id}.png`}
                width={75}
                />
            {/* <button>edit</button> figure out how to put this on the card */}
        </div>
    )
}

export default PlayingCard

// /src/img/playingCards/hearts/no_edition/no_enhancement/no_seal/2.png