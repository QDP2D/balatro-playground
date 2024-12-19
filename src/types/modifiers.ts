interface Modifier {
    name: string
    descrption: string
    effect: () => void
}

/* ===== EDITIONS ===== */

export enum EditionType {
    BASE = 'base',
    FOIL = 'foil',
    HOLO = 'holographic',
    POLY = 'polychrome'
}

export interface Edition {
    type: EditionType
}

/* ===== ENHANCEMENTS ===== */
export enum EnhancementType {
    BASE = 'base',
    BONUS = 'bonus',
    GLASS = 'glass',
    MULT = 'mult',
    STEEL = 'steel',
    STONE = 'stone',
    WILD = 'wild'
}

export interface Enhancement extends Modifier {
    type: EnhancementType
}

/* ===== SEALS ===== */
export enum SealType {
    BLUE = 'blue',
    GOLD = 'gold',
    PURPLE = 'purple',
    RED = 'red'
}

export interface Seal extends Modifier {
    type: SealType
}
