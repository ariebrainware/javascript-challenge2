const person = [
    "Abba",
    "Alif",
    "Arie",
    "Guntur",
    "Indro",
    "Sophie"
]

const get = ()=>{
    const group1 = $("#group1")
    const group2 = $("#group2")
}
const set = ()=>{
    
}
let randomNumber = ()=>{
    let result = Math.floor(Math.random() * 6 )
    return result
}

let group = ()=>{
    member={
        person1: person[randomNumber()],
        person2: person[randomNumber()],
        person3: person[randomNumber()]
    }
    return member
}
console.log(group())