export type Seal = {
    id: number
    name: string
    description: string
    effect: () => void
}