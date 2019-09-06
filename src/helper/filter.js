function filterForLocation(value, listing) {
    if (value == "Any") {
        return true;
    }
    return listing.location == value;
}

function filterForBedroom(value, listing) {
    if (value == "Any") {
        return true;
    }
    return listing.bedroom == value;
}

function filterForFloor(value, listing) {
    if (value == "Any") {
        return true;
    }
    return listing.floor == value;
}

function filterForPrice(value, listing) {
    if (value == "Any") {
        return true;
    }
    return true;
    // return listing.price == value;
}

function filterAll(location, bedroom, floor, price, listing) {
    return (
        filterForLocation(location, listing) &&
        filterForBedroom(bedroom, listing) &&
        filterForFloor(floor, listing) &&
        filterForPrice(price, listing)
    );
}

export {
    filterForLocation,
    filterForBedroom,
    filterForFloor,
    filterForPrice,
    filterAll
};