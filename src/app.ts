import { Invoice } from './classes/Invoice.js'

const invoiceOne = new Invoice( 'mario', 'working on the mario website', 250);
const invoiceTwo = new Invoice( 'luigi', 'working on the luigi website', 300)

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevent default page refresh 

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})