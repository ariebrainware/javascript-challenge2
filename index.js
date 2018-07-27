const whitespace = () => {
    console.log(`====================
    `)
}
// Level 0

const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

const result = names.map(x => {
    return x
})
console.log("Mapping " + result);

whitespace()

// Level 1-2

const filterName = {
    filterNameByGenderMale: () => {
        const filteredName = names.filter(function (item) {
            return item.includes("Mr.")
        })
        console.log(filteredName)
    },
    filterNameByGenderFemale: () => {
        const filteredName = names.filter(function (element) {
            return element.includes("Mrs.")
        })
        console.log(filteredName)
    }
}
filterName.filterNameByGenderMale()
filterName.filterNameByGenderFemale()
whitespace()

// Level 3 
const keyword = "paul"

const search = names.filter(name => {
    return name.toLowerCase().includes(keyword.toLowerCase());
});
console.log(search);
whitespace()

// Level 4

const fruit1 = ["Jackfruit", "Watermelon", "Orange"]
const fruit2 = ["Avocado", "Lemon", "Raspberry", "Strawberry"]
const joinedFruit = []
const joinFruit = (fruit) => {
    fruit.forEach(function (fruit) {
        joinedFruit.push(fruit)
    })
}

const showFruit = () => {
    joinedFruit.forEach(function (fruit) {
        console.log(fruit)
    })
}
joinFruit(fruit1)
joinFruit(fruit2)
showFruit()
whitespace()

// Level 5

const names2 = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
];

const newArrayElement = []
const checkDataType = ()=>{
    names2.forEach(function(element){
        const dataType = typeof element
        if(dataType=="string"){
            newArrayElement.push(element)
        }

    })
    console.log(newArrayElement)
}

const showNewElement = () =>{
    return newArrayElement
}

checkDataType()
whitespace()