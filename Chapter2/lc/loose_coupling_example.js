/*

Tight coupling:

function setTable() {
    const cloth = new TableCloth();
    const dishes = new Dishes();

    this.placeTableCloth(cloth);
    this.placeDishes(dishes);
};

*/

// Loose coupling:

function setTable(cloth, dishes) {
    this.placeTableCloth(cloth);
    this.placeDishes(dishes);
};