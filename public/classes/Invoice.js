export class Invoice {
    constructor(client, // read only both outside/inside but not change value
    details, // change inside of the class not outside
    amount // default: can change and read the value outside/inside of the class
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
