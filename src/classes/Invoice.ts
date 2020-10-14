export class Invoice { 
    constructor(
        readonly client: string, // read only both outside/inside but not change value
        private details: string, // change inside of the class not outside
        public amount: number // default: can change and read the value outside/inside of the class
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}