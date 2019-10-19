import Vue from 'vue'
import Vuex from 'vuex'

import {
  ListingService
} from '@/api-common';

import {
  filterAll
} from '@/helper/filter'

import {
  SET_LOCATION,
  SET_BEDROOM,
  SET_FLOOR,
  SET_PRICE,
  SET_FIND_LOADING,
  SET_LISTINGS,
  SET_FILTERED_LISTINGS,
  SET_TABLE_DATA_LOADING,
  SET_CAROUSEL_SHOWN,
  SET_SEARCH_RESULT_SHOWN,
  SET_LISTING_SHOWN,
  SET_SELECTED_SEARCH_ITEM
} from "./mutations.type";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filteredListings: [],
    listings: [],
    selectedLocation: undefined,
    selectedBedroom: undefined,
    selectedFloor: undefined,
    selectedPrice: undefined,
    selectedSearchItem: undefined,
    isFindButtonLoading: false,
    isTableDataLoading: false,
    isHomeCarouselShown: true,
    isSearchResultShown: false,
    isListingShown: false
  },
  getters: {
    listings(state) {
      return state.listings;
    },
    filteredListings(state) {
      return state.filteredListings;
    },
    selectedLocation(state) {
      return state.selectedLocation;
    },
    selectedBedroom(state) {
      return state.selectedBedroom;
    },
    selectedFloor(state) {
      return state.selectedFloor;
    },
    selectedPrice(state) {
      return state.selectedPrice;
    },
    isFindButtonLoading(state) {
      return state.isFindButtonLoading;
    },
    isTableDataLoading(state) {
      return state.isTableDataLoading;
    },
    isHomeCarouselShown(state) {
      return state.isHomeCarouselShown;
    },
    isSearchResultShown(state) {
      return state.isSearchResultShown;
    },
    isListingShown(state) {
      return state.isListingShown;
    },
    selectedSearchItem(state) {
      return state.selectedSearchItem;
    }
  },
  mutations: {
    [SET_LOCATION](state, selectedLocation) {
      state.selectedLocation = selectedLocation
    },
    [SET_BEDROOM](state, selectedBedroom) {
      state.selectedBedroom = selectedBedroom
    },
    [SET_FLOOR](state, selectedFloor) {
      state.selectedFloor = selectedFloor
    },
    [SET_PRICE](state, selectedPrice) {
      state.selectedPrice = selectedPrice
    },
    [SET_FIND_LOADING](state, isLoading) {
      state.isFindButtonLoading = isLoading
    },
    [SET_TABLE_DATA_LOADING](state, isLoading) {
      state.isTableDataLoading = isLoading
    },
    [SET_LISTINGS](state, listings) {
      state.listings = listings
    },
    [SET_FILTERED_LISTINGS](state, filteredListings) {
      state.filteredListings = filteredListings
    },
    [SET_CAROUSEL_SHOWN](state, isHomeCarouselShown) {
      state.isHomeCarouselShown = isHomeCarouselShown
    },
    [SET_SEARCH_RESULT_SHOWN](state, isSearchResultShown) {
      state.isSearchResultShown = isSearchResultShown
    },
    [SET_LISTING_SHOWN](state, isListingShown) {
      state.isListingShown = isListingShown
    },
    [SET_SELECTED_SEARCH_ITEM](state, selectedSearchItem) {
      state.selectedSearchItem = selectedSearchItem
    },
    addListing(state, listing) {
      state.listings.push({
        listing
      })
    },
    removeListing(state, listing) {
      state.listings.splice(state.listings.indexOf(listing), 1)
    }
  },
  actions: {

    findPressed({
      commit
    }, payload) {
     
      commit(SET_LOCATION, payload.filters.selectedLocation);
      commit(SET_BEDROOM, payload.filters.selectedBedroom);
      commit(SET_FLOOR, payload.filters.selectedFloor);
      commit(SET_PRICE, payload.filters.selectedPrice);
      commit(SET_FIND_LOADING, true);
      ListingService.getAll().then(function (response) {
        var filteredListings = response.data.filter(listing => {
          return filterAll(payload.filters.selectedLocation, payload.filters.selectedBedroom, payload.filters.selectedFloor, payload.filters.selectedPrice, listing);
        });
        commit(SET_FILTERED_LISTINGS, filteredListings);
        commit(SET_FIND_LOADING, false);
        commit(SET_CAROUSEL_SHOWN, false);
        commit(SET_LISTING_SHOWN, false);
        commit(SET_SEARCH_RESULT_SHOWN, true);

      })
        .catch(function (error) {
          // handle error
          // console.log(error);
        });

    },
    searchResultBackPressed({
      commit
    }) {
      commit(SET_CAROUSEL_SHOWN, true);
      commit(SET_SEARCH_RESULT_SHOWN, false);

    },
    listingBackPressed({
      commit
    }) {
      commit(SET_SEARCH_RESULT_SHOWN, true);
      commit(SET_LISTING_SHOWN, false);
    },
    searchItemSelected({
      commit
    }, payload) {
      commit(SET_SELECTED_SEARCH_ITEM, payload.item);
      commit(SET_SEARCH_RESULT_SHOWN, false);
      commit(SET_LISTING_SHOWN, true);
    },
    getAllListings({
      commit
    }) {
      commit(SET_TABLE_DATA_LOADING, true);
      ListingService.getAll().then(function (response) {
        var listings = response.data;
        commit(SET_LISTINGS, listings);
        // console.log(listings);
        commit(SET_TABLE_DATA_LOADING, false);

      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

  }
})