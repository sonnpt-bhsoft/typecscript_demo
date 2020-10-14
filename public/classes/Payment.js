export class Payment {
    constructor(recipient, // read only both outside/inside but not change value
    details, // change inside of the class not outside
    amount // default: can change and read the value outside/inside of the class
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
