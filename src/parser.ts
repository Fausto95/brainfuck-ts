import { Token, Tokens } from "./tokenizer";

export type LoopNode = {
    kind: 'Loop';
    body: Node[];
}

export type CommandNode = {
    kind: 'Command';
    token: Token;
}

export type Node = LoopNode | CommandNode;

export function parser(tokens: Token[]): Node[] {
    const ast: Node[] = [];
    const stack: Node[][] = [ast];

    tokens.forEach(token => {
        const current = stack[stack.length - 1];

        if (token === Tokens.LoopStart) {
            const loopNode: LoopNode = { kind: 'Loop', body: [] };
            current.push(loopNode);
            stack.push(loopNode.body);
        } else if (token === Tokens.LoopEnd) {
            stack.pop();
        } else {
            current.push({ kind: 'Command', token });
        }
    });

    return ast;
}
