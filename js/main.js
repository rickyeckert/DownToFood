// Food Choices
const food1 = {
    name: "BJ's Restaurant & Brewhouse",
    response: "Nothing to expensive.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74433.06772964158!2d-119.79791422543538!3d36.77387670049525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945d70215509ab%3A0xd980b3580ee49306!2sBJ&#39;s%20Restaurant%20%26%20Brewhouse!5e0!3m2!1sen!2sus!4v1666914836127!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food2 = {
    name: 'Buffalo Wild Wings',
    response: 'Their service sucks.',
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74433.06772964158!2d-119.79791422543538!3d36.77387670049525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9739e8afd1f7d0d1!2sBuffalo%20Wild%20Wings!5e0!3m2!1sen!2sus!4v1666915378542!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food3 = {
    name: "Chili's Grill & Bar",
    response: "But that's too far of a drive...",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102290.47649508946!2d-119.88151701403228!3d36.75671381981261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094662285c4993d%3A0x6b72e250ced97314!2sChili&#39;s%20Grill%20%26%20Bar!5e0!3m2!1sen!2sus!4v1666915440617!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food4 = {
    name: "Chipotle Mexican Grill",
    response: 'You ALWAAAYS want that.',
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102290.47649508946!2d-119.88151701403228!3d36.75671381981261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809467625d9321e5%3A0xf5a2047cd70bdad8!2sChipotle%20Mexican%20Grill!5e0!3m2!1sen!2sus!4v1666915502828!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food5 = {
    name: "Denny's",
    response: 'No... not right now. Maybe tomorrow.',
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51145.54715833626!2d-119.84702846755881!3d36.75625050097325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809467267c9dc485%3A0x602f6cc85be8e038!2sDenny&#39;s!5e0!3m2!1sen!2sus!4v1666915567933!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food6 = {
    name: "Fleming's Prime Steakhouse & Wine Bar",
    response: "I don't want to get all ready just for a meal.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12779.38547014425!2d-119.78556549533694!3d36.79823376258303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83a37a01b7f21d39!2sFleming%E2%80%99s%20Prime%20Steakhouse%20%26%20Wine%20Bar!5e0!3m2!1sen!2sus!4v1666915676317!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food7 = {
    name: 'In-N-Out Burger',
    response: "I'm not feeling that.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51145.54715833626!2d-119.84702846755881!3d36.75625050097325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32600950577daa0b!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1666915652965!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food8 = {
    name: 'Libelula',
    response: "That's TOO healthy.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60843.058986320844!2d-119.80262968731164!3d36.73050068997055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809461a3c90085f9%3A0xbc31dd4a7ff7c594!2sLibelula!5e0!3m2!1sen!2sus!4v1666915690796!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food9 = {
    name: "Lola's Ricos Tacos",
    response: "My stomach can't handle that tonight.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60838.65091317789!2d-119.83896677300186!3d36.73606323723819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809460a988d49231%3A0x9a4cf1b4d6f7c216!2sLola&#39;s%20Ricos%20Tacos!5e0!3m2!1sen!2sus!4v1666915713532!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food10 = {
    name: "McDonald's",
    response: "I don't want fast food.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60838.65091317789!2d-119.83896677300186!3d36.73606323723819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80946755bd2019c3%3A0xe0d18870ec468997!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1666915726444!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food11 = {
    name: 'Ming Restaurant',
    response: 'mmm...',
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60838.65091317789!2d-119.83896677300186!3d36.73606323723819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809467504045216f%3A0x50c233de2e0a33da!2sMing%20Restaurant!5e0!3m2!1sen!2sus!4v1666915738941!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food12 = {
    name: 'Pizza Hut',
    response: 'Too unhealthy.',
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60834.89088537353!2d-119.83876263207102!3d36.7408074443637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80946099d1e5e747%3A0xd6d5695bc1c1aea7!2sPizza%20Hut!5e0!3m2!1sen!2sus!4v1666915756116!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food13 = {
    name: 'Subway',
    response: "I'm not feeling that.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60834.89088537353!2d-119.83876263207102!3d36.7408074443637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e167c36a36f%3A0xc56e41531a17c1cb!2sSubway!5e0!3m2!1sen!2sus!4v1666915791571!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food14 = {
    name: 'Taco Bell',
    response: "We've been having that a lot lately.",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60834.89088537353!2d-119.83876263207102!3d36.7408074443637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809467578b47f10b%3A0xed62d6b505095347!2sTaco%20Bell!5e0!3m2!1sen!2sus!4v1666915807700!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};
const food15 = {
    name: 'Wasabi Off the Hook',
    response: 'Lasttime that made me sick.',
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60821.27544773763!2d-119.83059699483724!3d36.75798229309044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809467eca0cba83d%3A0x540c1500dfa36a44!2sWassabi%20Off%20the%20Hook!5e0!3m2!1sen!2sus!4v1666915822676!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};


//Choosing Location Number
const foodLocations = [food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15];
let foodSelection = [];

//Selecting from Random Food Location
function getFoodLocation() {

let randFoodNumb = Math.floor(Math.random() * foodLocations.length);
let randFoodLocation = foodLocations.splice(randFoodNumb, 1)[0];
foodSelection.push(randFoodLocation);
return foodSelection;
};

//Initiate Selection
getFoodLocation();



//Function for Map on Selection
function showMap(thing) {
    const map = document.querySelector('#map');
    map.innerHTML = thing.location
};

// showMap(food1);