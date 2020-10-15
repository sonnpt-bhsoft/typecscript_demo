import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/Payment.js'
import { hasFormatter } from './interfaces/hasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevent default refresh page after click submit 

    let doc: hasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    
    list.render(doc, type.value, 'end') 
})

// GENERIC
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({ name: 'Joker', age: 21 });
// let docTwo = addUID('Hello') -> get error, because function return object with

console.log(docOne.name);


// ENUMS
enum resourceType { BOOK, AUTHOR, FILM, VIDEO, PERSON, DIRECTOR, GIMMICK }

// GENERIC with interfaces
interface Resource<T> {
    uid: number;
    resourceType: resourceType;
    data: T
}


const docThree: Resource<object> = {
    uid: 1,
    resourceType: resourceType.AUTHOR,
    data: { name: 'Joker'}
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceType: resourceType.GIMMICK,
    data: ['Pk ring', 'IT', 'Deck']
}

console.log(docThree, docFour);


let arr = ['Joker', 21, true];
arr[0] = 'Joker boy'
arr = ['Joker']
console.log(arr);

