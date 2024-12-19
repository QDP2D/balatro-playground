import { Edition, Enhancement, Rank, Seal, Suit } from ".";

export interface PlayingCard {
    id: number
    edition: Edition
    enhancement: Enhancement
    rank: Rank
    seal: Seal
    suit: Suit
}