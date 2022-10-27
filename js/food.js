export {randFoodNumb};

const food1 = {
    name: "BJ's Restaurant & Brewhouse",
    response: "Nothing to expensive.",
};
const food2 = {
    name: 'Buffalo Wild Wings',
    response: 'Their service sucks.',
};
const food3 = {
    name: "Chili's Grill & Bar",
    response: "But that's too far of a drive...",
};
const food4 = {
    name: "Chipotle Mexican Grill",
    response: '',
};
const food5 = {
    name: "Denny's",
    response: 'No... not right now. Maybe tomorrow.',
};
const food6 = {
    name: "Fleming's Prime Steakhouse & Wine Bar",
    response: "I don't want to get all ready just for a meal.",
};
const food7 = {
    name: 'In-N-Out Burger',
    response: "I'm not feeling that.",
};
const food8 = {
    name: 'Libelula',
    response: "That's TOO healthy.",
};
const food9 = {
    name: "Lola's Ricos Tacos",
    response: "My stomach can't handle that tonight.",
};
const food10 = {
    name: "McDonald's",
    response: "I don't want fast food.",
};
const food11 = {
    name: 'Ming Restaurant',
    response: 'mmm...',
};
const food12 = {
    name: 'Pizza Hut',
    response: 'Too unhealthy.',
};
const food13 = {
    name: 'Subway',
    response: "I'm not feeling that.",
};
const food14 = {
    name: 'Taco Bell',
    response: "We've been having that a lot lately.",
};
const food15 = {
    name: 'Wasabi Off the Hook',
    response: 'Lasttime that made me sick.',
};

const foodLocations = [food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15];

let randFoodNumb = Math.floor(Math.random() * foodLocations.length);

