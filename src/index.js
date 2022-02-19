const papa = {
    name: "Fred",
    age: 57,
};
const maman = {
    name: "Choube",
    age: 49,
};
const lisa = {
    name: "Lisa",
    age: 21,
};
const fany = {
    name: "Fany",
    age: 18,
};

const famille = [
    {
        ...papa,
        type: "papa",
    },
    {
        ...maman,
        type: "maman",
    },
];

document.querySelector("#app").innerHTML = famille;
