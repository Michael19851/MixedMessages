const verb = ["smell", "run", "eat", "leap", "grab"];
const person = ["Bob", "Matt", "Kate", "Jeff", "Phil"];
const noun = ["couch", "dog", "skateboard", "bench", "house"];

const randomVerb = verb[Math.floor(Math.random() * verb.length)]
const randomPerson = person[Math.floor(Math.random() * person.length)]
const randomNoun = noun[Math.floor(Math.random() * noun.length)]

function randomMessage() {
    return `${randomPerson} was on their way to buy a ${randomNoun} when they had to ${randomVerb} a sandwich.`
}

console.log(randomMessage());