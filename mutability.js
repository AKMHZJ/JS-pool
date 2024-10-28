const clone1 = {};

const clone2 = {};

Object.assign(clone1,person)
Object.assign(clone2,person)

const samePerson = person;

person.age++;
person.country = 'FR';