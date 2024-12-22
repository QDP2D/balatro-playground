import { EditionEnum, EnhancementEnum, RankType, SealEnum, SuitEnum } from ".";

export interface PlayingCardType {
    id: number
    edition: EditionEnum.FOIL | EditionEnum.HOLO | EditionEnum.NO_EDITION | EditionEnum.POLY
    enhancement: EnhancementEnum.BONUS | EnhancementEnum.GLASS | EnhancementEnum.MULT | EnhancementEnum.NO_ENHANCEMENT | EnhancementEnum.STEEL | EnhancementEnum.STONE
    rank: RankType
    seal: SealEnum.BLUE | SealEnum.GOLD | SealEnum.NO_SEAL | SealEnum.PURPLE | SealEnum.RED
    suit: SuitEnum.CLUBS | SuitEnum.DIAMONDS | SuitEnum.HEARTS | SuitEnum.SPADES
}