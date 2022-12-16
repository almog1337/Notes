export type Interval = {
    numberOfSemiTone: number;
    shortName: string;
    fullName: string;
}
export const SemiTone = 0.5;
export const WholeTone = 1;
export const LastIntervalIndex = 12;
export const Intervals = new Map<number, Interval>([
    [0,
        {
            numberOfSemiTone: 0,
            shortName: 'P1',
            fullName: 'unison'
        }
    ],
    [1,
        {
            numberOfSemiTone: 1,
            shortName: 'm2',
            fullName: 'minor second'
        }
    ],
    [2,
        {
            numberOfSemiTone: 2,
            shortName: 'M2',
            fullName: 'major second'
        }
    ],
    [3,
        {
            numberOfSemiTone: 3,
            shortName: 'm3',
            fullName: 'minor third'
        }
    ],
    [4,
        {
            numberOfSemiTone: 4,
            shortName: 'M3',
            fullName: 'major third'
        }
    ],
    [5,
        {
            numberOfSemiTone: 5,
            shortName: 'P4',
            fullName: 'perfect fourth'
        }
    ],
    [6,
        {
            numberOfSemiTone: 6,
            shortName: '+4 / d5',
            fullName: 'augmented fourth / diminished fifth'
        }
    ],
    [7,
        {
            numberOfSemiTone: 7,
            shortName: 'P5',
            fullName: 'perfect fifth'
        }
    ],
    [8,
        {
            numberOfSemiTone: 8,
            shortName: 'm6',
            fullName: 'minor sixth'
        }
    ],
    [9,
        {
            numberOfSemiTone: 9,
            shortName: 'M6',
            fullName: 'major sixth'
        }
    ],
    [10,
        {
            numberOfSemiTone: 10,
            shortName: 'm7',
            fullName: 'minor seventh'
        }
    ],
    [11,
        {
            numberOfSemiTone: 11,
            shortName: 'M7',
            fullName: 'major seventh'
        }
    ],
    [12,
        {
            numberOfSemiTone: 12,
            shortName: '8va',
            fullName: 'octave'
        }
    ]
]);