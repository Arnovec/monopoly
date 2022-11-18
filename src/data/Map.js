const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];
const chest = [2, 17, 33];
const chance = [7, 22, 36];

const map = [];

map[0] = {
    img: "start.png",
    type: "angel",
};
map[10] = {
    img: "jail.png",
    type: "angel",
};
map[20] = {
    img: "parking.png",
    type: "angel",
};
map[30] = {
    img: "goTo.png",
    type: "angel",
};

for (const id of placeFieldIds) {
    map[id] = {
        type: "realty",
    };
}
for (const id of FieldWithImgIds) {
    map[id] = {
        type: "img",
    };
}
for (let i = 5; i < 40; i += 10) {
    map[i] = {
        type: "img",
        img: "stantion.png",
    }
}
for (const id of chest) {
    map[id] = {
        type: "img",
        img: "chest.png",
    }
}
for (const id of chance) {
    map[id] = {
        type: "img",
        img: "chance.png",
    }
}

export default map;