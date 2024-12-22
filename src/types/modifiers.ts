interface Modifier {
    name: string
    descrption: string
    effect: () => void
}

/* ===== EDITIONS ===== */

export enum EditionType {
    FOIL = 'foil',
    HOLO = 'holographic',
    NONE = 'no_edition',
    POLY = 'polychrome'
}

export interface Edition {
    type: EditionType
}

/* ===== ENHANCEMENTS ===== */
export enum EnhancementType {
    BONUS = 'bonus',
    GLASS = 'glass',
    MULT = 'mult',
    NONE = 'no_enhancement',
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
    NONE = 'no_seal',
    PURPLE = 'purple',
    RED = 'red'
}

export interface Seal extends Modifier {
    type: SealType
}
