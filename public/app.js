"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(client, // read only both outside/inside but not change value
    details, // change inside of the class not outside
    amount // default: can change and read the value outside/inside of the class
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('mario', 'working on the mario website', 250);
var invoiceTwo = new Invoice('luigi', 'working on the luigi website', 300);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector('form')!
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default page refresh 
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
