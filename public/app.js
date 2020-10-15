import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice('mario', 'web work', 250);
// docTwo = new Payment('joker', 'thaison', 200);
// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invoiceOne = new Invoice( 'mario', 'working on the mario website', 250);
// const invoiceTwo = new Invoice( 'luigi', 'working on the luigi website', 300)
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default refresh page after click submit 
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
