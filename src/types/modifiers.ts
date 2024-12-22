interface ModifierType {
    name: string
    description: string
    // effect: () => void
}

/* ===== EDITIONS ===== */

export enum EditionEnum {
    FOIL = 'foil',
    HOLO = 'holographic',
    NO_EDITION = 'no_edition',
    POLY = 'polychrome'
}

export interface EditionType extends ModifierType {
    variant: EditionEnum.FOIL | EditionEnum.HOLO | EditionEnum.NO_EDITION | EditionEnum.POLY
}

/* ===== ENHANCEMENTS ===== */
export enum EnhancementEnum {
    BONUS = 'bonus',
    GLASS = 'glass',
    MULT = 'mult',
    NO_ENHANCEMENT = 'no_enhancement',
    STEEL = 'steel',
    STONE = 'stone',
    WILD = 'wild'
}

export interface EnhancementType extends ModifierType {
    variant: EnhancementEnum.BONUS | EnhancementEnum.GLASS | EnhancementEnum.MULT | EnhancementEnum.NO_ENHANCEMENT | EnhancementEnum.STEEL | EnhancementEnum.STONE | EnhancementEnum.WILD
}

/* ===== SEALS ===== */

export enum SealEnum {
    BLUE = 'blue',
    GOLD = 'gold',
    NO_SEAL = 'no_seal',
    PURPLE = 'purple',
    RED = 'red'
}

export interface SealType extends ModifierType {
    variant: SealEnum.BLUE | SealEnum.GOLD | SealEnum.NO_SEAL | SealEnum.PURPLE | SealEnum.RED
}
