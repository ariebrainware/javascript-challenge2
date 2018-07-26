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

const result = names.forEach(function (element) {
    console.log(element)
})
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
const name = "paul"
const name2 = new RegExp(`${name}`, 'i')
const name3 = name2.ignoreCase
const searchPerson = (name) => {}
const hasil = names.find(function (element) {
    if(name3 == true){
        return `Result: ${name2}`
    }else{
        return `404`
    }
})


console.log(hasil)