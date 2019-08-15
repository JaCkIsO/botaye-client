<template>
  <v-container fluid class="home-hero" grid-list-lg>
    <v-layout justify-center row>
      <search-bar></search-bar>
      <home-carousel></home-carousel>
      <!-- <search-result></search-result> -->
      <!-- <listing-detail></listing-detail> -->
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
  data: () => ({})
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