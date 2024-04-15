const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1847 },
]

const people = ["Beck, Glenn", "becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beethven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Benn, Tony", "Berlin, Irving", "Berry, Wendell", "Black Elk", "Blair, Tony"]

// 1 filter the list of inventors for those who were born i the 1500's
const fifteen = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year < 1600)
)

console.log(fifteen);

// 2 Give us an array of the inventory first and last names

const fullNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`)

console.log(fullNames);

// 3 Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

console.log(ordered);

// 4 How many yaers dis all the inventors live?
const totalYear = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);

console.log(totalYear);

// 5 Sort the inventors by year lived
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1
})

console.log(oldest);

// 6 create a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const links = Array.from(document.querySelectorAll(".mw-category a"));
const de = links.map((link => link.textContent)).filter((streetName) => streetName.includes("de"));

// 7 sort exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
})

console.log(alpha);

// 8 Reduce Exercise
// Sum up the instances of each of these
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj
}, {});

console.log(transportation);