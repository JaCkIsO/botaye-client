<template>
  <v-container fluid class="home-hero" grid-list-lg>
    <v-layout justify-center row>
      <v-flex md12>
        <search-bar></search-bar>
      </v-flex>
      <v-flex md12>
        <home-carousel class="mx-0 px-0" v-if="isHomeCarouselShown"></home-carousel>
        <search-result class="mx-2 px-2" v-if="isSearchResultShown"></search-result>
        <listing-detail class="mx-2 px-2" v-if="isListingShown"></listing-detail>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from "../store";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import HomeCarousel from "@/components/HomeCarousel";
import ListingDetail from "@/components/ListingDetail";

export default {
  name: "HomeHero",
  components: {
    SearchBar,
    SearchResult,
    HomeCarousel,
    ListingDetail
  },
  computed: {
    isHomeCarouselShown: () => store.getters.isHomeCarouselShown,
    isSearchResultShown: () => store.getters.isSearchResultShown,
    isListingShown: () => store.getters.isListingShown
  }
};
</script>

<style scoped>
.home-hero {
  background-color: #042539;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>