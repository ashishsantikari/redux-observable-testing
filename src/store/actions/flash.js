export const FLASH_EVEN_COUNT = 'FLASH_EVEN_COUNT';
export const FLASH_ODD_COUNT = 'FLASH_ODD_COUNT';
export const FLASH_ZERO_COUNT = 'FLASH_ZERO_COUNT'

export function flashEvenCount(){
    return { type: FLASH_EVEN_COUNT };
}

export function flashOddCount(){
    return { type: FLASH_ODD_COUNT };
}

export function flashZeroCount(){
    return { type: FLASH_ZERO_COUNT };
}