import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/Payment.js';
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
// GENERIC
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Joker', age: 21 });
// let docTwo = addUID('Hello') -> get error, because function return object with
console.log(docOne.name);
// ENUMS
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["VIDEO"] = 3] = "VIDEO";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
    resourceType[resourceType["DIRECTOR"] = 5] = "DIRECTOR";
    resourceType[resourceType["GIMMICK"] = 6] = "GIMMICK";
})(resourceType || (resourceType = {}));
const docThree = {
    uid: 1,
    resourceType: resourceType.AUTHOR,
    data: { name: 'Joker' }
};
const docFour = {
    uid: 2,
    resourceType: resourceType.GIMMICK,
    data: ['Pk ring', 'IT', 'Deck']
};
console.log(docThree, docFour);
let arr = ['Joker', 21, true];
arr[0] = 'Joker boy';
arr = ['Joker'];
console.log(arr);
