import { Intervals, LastIntervalIndex } from "./types/intervals";
import { Notes, NotesAmount } from "./types/notes";

export function randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * ((max + 1) - min));
}

export function getRandomNote(min: number=1, max: number=NotesAmount) {
    if(max > NotesAmount) max = max % NotesAmount;
    return Notes[randomInteger(min, max)];
}

export function getRandomInterval(min: number=0, max: number=LastIntervalIndex) {
    if(max > NotesAmount) max = max % LastIntervalIndex;
    const interval = Intervals.get(randomInteger(min, max));
    if(!interval) throw new Error("Interval not found in Intervals Map")
    return interval
}