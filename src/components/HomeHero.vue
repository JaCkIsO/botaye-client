<template>
  <v-container fluid class="home-hero" grid-list-lg>
    <v-layout justify-center row>
      <v-flex md12>
        <search-bar v-on:search-bar-find="onSearchBarFind"></search-bar>
      </v-flex>
      <v-flex md12>
        <home-carousel v-show="homeCarousel"></home-carousel>
        <search-result
          class="mx-2 px-2"
          v-show="searchResultView"
          v-on:search-result-back="onSearchResultBack"
          v-on:search-result-select="onSearchResultSelect"
        ></search-result>
        <listing-detail
          class="mx-2 px-2"
          :listing="listing"
          v-show="listingDetailView"
          v-on:listing-detail-back="onListingDetailBack"
        ></listing-detail>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
  data: () => ({
    listingDetailView: false,
    searchResultView: false,
    homeCarousel: true,

    listing: undefined,

    length: 3,
    window: 0,
    autorun: false
  }),
  methods: {
    onSearchBarFind: function() {
      this.homeCarousel = false;
      this.listingDetailView = false;
      this.searchResultView = true;
    },
    onSearchResultBack: function() {
      this.searchResultView = false;
      this.listingDetailView = false;
      this.homeCarousel = true;
    },
    onSearchResultSelect: function(selectedListing) {
      this.searchResultView = false;
      this.homeCarousel = false;
      this.listingDetailView = true;
      this.listing = selectedListing;
    },
    onListingDetailBack: function() {
      this.listingDetailView = false;
      this.homeCarousel = false;
      this.searchResultView = true;
    }
  }
};
</script>

<style scoped>
.home-hero {
  /* background-image: url("https://i.imgur.com/1VIj0U7.jpg"); */
  background-color: #042539;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>