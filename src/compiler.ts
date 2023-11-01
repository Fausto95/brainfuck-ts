import { interpreter } from "./interpreter";
import { parser } from "./parser";
import { tokenizer } from "./tokenizer";

export function compile() {
    console.log('Compiling...');
    
    const code = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------';
    const tokens = tokenizer(code);
    const ast = parser(tokens);
    const output = interpreter(ast);
    
    console.log('Compilation finished...');

    console.log("Output:", output);
}