import {
    ANY_OPTION
  } from '@/helper/optionLists'

function filterForLocation(selectedFilter, listing) {
    if (selectedFilter.value == ANY_OPTION) {
        return true;
    }
    return listing.location == selectedFilter.value;
}

function filterForBedroom(selectedFilter, listing) {
    if (selectedFilter.value == ANY_OPTION) {
        return true;
    }
    return listing.bedroom == selectedFilter.value;
}

function filterForFloor(selectedFilter, listing) {
    if (selectedFilter.value == ANY_OPTION) {
        return true;
    }
    return listing.floor == selectedFilter.value;
}

function filterForPrice(selectedFilter, listing) {
    if (selectedFilter.value == ANY_OPTION) {
        return true;
    }
    return listing.price <= selectedFilter.maxValue && listing.price >= selectedFilter.minValue 
    
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
    filterAll
};