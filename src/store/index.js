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
} from "./mutations.type";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filteredListings: [],
    listings: [],
    selectedLocation: "",
    selectedBedroom: "",
    selectedFloor: "",
    selectedPrice: "",
    isFindButtonLoading: false,
    isTableDataLoading: false,
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
      commit(SET_LOCATION, payload.selectedLocation);
      commit(SET_BEDROOM, payload.selectedBedroom);
      commit(SET_FLOOR, payload.selectedFloor);
      commit(SET_PRICE, payload.selectedPrice);
      commit(SET_FIND_LOADING, true);
      ListingService.getAll().then(function (response) {
          var filteredListings = response.data.filter(listing => {
            return filterAll(payload.selectedLocation, payload.selectedBedroom, payload.selectedFloor, payload.selectedPrice, listing);
          });
          commit(SET_FILTERED_LISTINGS, filteredListings);
          console.log(filteredListings);
          commit(SET_FIND_LOADING, false);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

    },
    getAllListings({
      commit
    }) {
      commit(SET_TABLE_DATA_LOADING, true);
      ListingService.getAll().then(function (response) {
          var listings = response.data;
          commit(SET_LISTINGS, listings);
          console.log(listings);
          commit(SET_TABLE_DATA_LOADING, false);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

  }
})