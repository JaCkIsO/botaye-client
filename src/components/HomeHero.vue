<template>
  <v-container fluid class="home-hero" grid-list-lg>
    <v-layout justify-center row>
      <v-flex xs12 sm12 md2>
        <v-card height="100">
          <v-select
            item-color="yellow"
            :items="locations"
            label="Location"
            color="yellow"
            background-color="brown"
            text-color="yellow"
            outlined
            hide-details
            multiple
            small-chips
            deletable-chips
            clearable
            open-on-clear
            dense
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span v-if="index === 1" class="grey--text caption">(+{{ value.length - 1 }} others)</span>
            </template>
          </v-select>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md2>
        <v-select
          item-color="yellow"
          :items="bedrooms"
          label="Bedroom"
          color="yellow"
          background-color="brown"
          text-color="yellow"
          outlined
          hide-details
          multiple
          small-chips
          deletable-chips
          clearable
          open-on-clear
          dense
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption">(+{{ value.length - 1 }} others)</span>
          </template>
        </v-select>
      </v-flex>
      <v-flex xs12 sm12 md2>
        <v-select
          item-color="yellow"
          :items="floors"
          label="Floor"
          color="yellow"
          background-color="brown"
          text-color="yellow"
          outlined
          hide-details
          multiple
          small-chips
          clearable
          open-on-clear
        >
          <template v-slot:selection="{ item, index }">
            <v-chip one-line v-if="index === 0">
              <span class="one-line caption">{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption">(+{{ value.length - 1 }} others)</span>
          </template>
        </v-select>
      </v-flex>
      <v-flex xs12 sm12 md2>
        <v-select
          item-color="yellow"
          :items="prices"
          label="Price"
          color="yellow"
          background-color="brown"
          text-color="yellow"
          outlined
          hide-details
          multiple
          small-chips
          deletable-chips
          clearable
          open-on-clear
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption">(+{{ value.length - 1 }} others)</span>
          </template>
        </v-select>
      </v-flex>
      <v-flex xs12 sm12 md1>
        <v-btn @click="condition = !condition" rounded elevation-1 x-large color="yellow">MORE</v-btn>
      </v-flex>
      <v-flex xs12 sm12 md1>
        <v-btn
          align-center
          justify-end
          @click="condition = !condition"
          rounded
          elevation-1
          x-large
          color="yellow"
        >FIND</v-btn>
      </v-flex>
      <home-carousel></home-carousel>
      <!-- <search-result></search-result> -->
      <!-- <listing-detail></listing-detail> -->
    </v-layout>
  </v-container>
</template>

<script>
import SearchResult from "@/components/SearchResult";
import HomeCarousel from "@/components/HomeCarousel";
import ListingDetail from "@/components/ListingDetail";

export default {
  name: "HomeHero",
  components: {
    SearchResult,
    HomeCarousel,
    ListingDetail
  },
  data: () => ({
    locations: ["Summit", "Gotera", "Lideta", "Ayat"],
    value: ["Summit Condo", "Gotera Condo", "Lideta", "Ayat"],
    bedrooms: ["Studio", "One Bedroom", "Two Bedroom", "Three Bedroom"],
    floors: [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor"
    ],
    prices: ["Summit Condo", "Gotera Condo", "Lideta", "Ayat"],
    condition: true
  })
};
</script>

<style scoped>
.home-hero {
  background-image: url("https://i.imgur.com/1VIj0U7.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>