//#region class

export declare class Song {
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
}

//#endregion class

//#region function

export declare function octave(number: number): number

//#endregion

//#region interface

export interface SongInfo {
    name: string
    author: string
    album: string
    system: string
    tuning: number
}

export interface SongSpeed {

}

//#endregion
