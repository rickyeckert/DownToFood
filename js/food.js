export {randFoodNumb};

const food1 = {
    name: "BJ's Restaurant & Brewhouse",
    response: '',
};
const food2 = {
    name: 'Buffalo Wild Wings',
    response: '',
};
const food3 = {
    name: "Chili's Grill & Bar",
    response: '',
};
const food4 = {
    name: "Chipotle Mexican Grill",
    response: '',
};
const food5 = {
    name: "Denny's",
    response: '',
};
const food6 = {
    name: "Fleming's Prime Steakhouse & Wine Bar",
    response: '',
};
const food7 = {
    name: 'In-N-Out Burger',
    response: '',
};
const food8 = {
    name: 'Libelula',
    response: '',
};
const food9 = {
    name: "Lola's Ricos Tacos",
    response: '',
};
const food10 = {
    name: "McDonald's",
    response: '',
};
const food11 = {
    name: 'Ming Restaurant',
    response: '',
};
const food12 = {
    name: 'Pizza Hut',
    response: '',
};
const food13 = {
    name: 'Subway',
    response: '',
};
const food14 = {
    name: 'Taco Bell',
    response: '',
};
const food15 = {
    name: 'Wasabi Off the Hook',
    response: '',
};

const foodLocations = [food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15];

let randFoodNumb = Math.floor(Math.random() * foodLocations.length);
console.log(randFoodNumb);