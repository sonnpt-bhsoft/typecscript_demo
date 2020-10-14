import { hasFormatter } from '../interfaces/hasFormatter.js'

export class Payment implements hasFormatter { 
    constructor(
        readonly recipient: string, // read only both outside/inside but not change value
        private details: string, // change inside of the class not outside
        public amount: number // default: can change and read the value outside/inside of the class
    ){}

    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}