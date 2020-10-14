const me = {
    name: 'Joker',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me); // this param have to be matched with interface IsPerson
import { Invoice } from './classes/Invoice.js';
const invoiceOne = new Invoice('mario', 'working on the mario website', 250);
const invoiceTwo = new Invoice('luigi', 'working on the luigi website', 300);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default page refresh 
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
