import { Node } from "./parser";
import { Token, Tokens } from "./tokenizer";

export type Data = {
    array: number[];
    pointer: number;
};

export function interpreter(ast: Node[]): string {
    let data: Data = { array: [], pointer: 0 };
    let output = '';

    function traverse(node: Node) {
        switch (node.kind) {
            case 'Command':
                runCommand(node.token, data);
                break;
            case 'Loop':
                while (data.array[data.pointer] !== 0) {
                    node.body.forEach(traverse);
                }
                break;
        }
    }

    function runCommand(token: Token, data: Data) {
        switch (token) {
            case Tokens.IncrementPointer:
                data.pointer++;
                break;
            case Tokens.DecrementPointer:
                data.pointer--;
                break;
            case Tokens.IncrementData:
                data.array[data.pointer] = (data.array[data.pointer] || 0) + 1;
                break;
            case Tokens.DecrementData:
                data.array[data.pointer] = (data.array[data.pointer] || 0) - 1;
                break;
            case Tokens.Output:
                output += String.fromCharCode(data.array[data.pointer]);
                break;
            case Tokens.Input:
                // Input is not supported
                break;
        }
    }

    ast.forEach(traverse);

    return output;
}
