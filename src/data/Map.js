const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];
const chest = [2, 17, 33];
const chance = [7, 22, 36];

const map = [];

map[0] = {
    img: "start.png",
    type: "angel",
    position: 0,
};
map[10] = {
    img: "jail.png",
    type: "angel",
    position: 10,
};
map[20] = {
    img: "parking.png",
    type: "angel",
    position: 20,
};
map[30] = {
    img: "goTo.png",
    type: "angel",
    position: 30,
};

for (const id of placeFieldIds) {
    map[id] = {
        type: "realty",
        cardName: "",
        costCard: "",
        position: id,
    };
}
for (const id of FieldWithImgIds) {
    map[id] = {
        type: "img",
        cardName: "",
        costCard: "",
        position: id,
    };
}
for (let i = 5; i < 40; i += 10) {
    map[i].type = "img";
    map[i].img = "stantion.png";
}
for (const id of chest) {
    map[id].type = "img";
    map[id].img = "chest.png";
    map[id].cardName = "Казна";
}
for (const id of chance) {
    map[id].type = "img";
    map[id].img = "chance.png";
    map[id].cardName = "Шанс";
}

map[4].img = "incomeTax.png";
map[4].cardName = "Подоходный налог";
map[4].costCard = "200";

map[12].img = "electric.png";
map[28].img = "water.png";

map[38].img = "luxuryTax.png";
map[38].cardName = "Налог на роскошь";
map[38].costCard = "500";

export default map;