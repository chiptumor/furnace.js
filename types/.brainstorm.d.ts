//#region class

export declare class Song {
    // TODO
    constructor(info: Partial<SongInfo>)
}

/**
 * A musical note.
 */
export declare class Note extends Number {


    /**
     * Transpose the note by a given amount.
     * @param amount The amount to transpose by.
     */
    transpose(amount: number): Note

    /** Return the note as displayed in a pattern. */
    toString(): string
}

//#endregion class

//#region function

/**
 * Multiply a number by 12.
 * @param number Number to multiply.
 */
export declare function octave(number: number): number

/**
 * Multiply a tempo value into 
 * @param number Number to multiply.
 */
export declare function tempo(number: number): number

//#endregion

//#region const

export const SHARP = "#"

export const FLAT = "b"

//#endregion

//#region interface

// TODO
export interface SongInfo {
    name: string
    author: string
    album: string
    system: string
    tuning: number
}

// TODO
export interface SongSpeed {
    tickRate: number
    speed: number | number[]
    virtualTempo: [ numerator: number, denominator: number ]
}

//#endregion

//#region type

export type NoteLetter =
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "A"
    | "B"

export type NoteAccidental = typeof SHARP | typeof FLAT

export type NoteName =
    | NoteLetter
    | `${Extract<NoteLetter, "C" | "D" | "F" | "G" | "A">}${typeof SHARP}`
    | `${Extract<NoteLetter, "D" | "E" | "G" | "A" | "B">}${typeof FLAT}`

//#endregion
