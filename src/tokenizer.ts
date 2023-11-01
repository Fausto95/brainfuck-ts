export const Tokens = {
    IncrementPointer : '>',
    DecrementPointer : '<',
    IncrementData : '+',
    DecrementData : '-',
    Output : '.',
    Input : ',',
    LoopStart : '[',
    LoopEnd : ']'
} as const;

export type Token = typeof Tokens[keyof typeof Tokens];

export function tokenizer(input: string): Token[] {
    return input.split('').filter(char => Object.values(Tokens).includes(char as Token));
}
