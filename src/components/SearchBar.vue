<template>
  <v-form ref="form">
    <v-layout justify-center row>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="locations"
          v-model="selectedLocation"
          label="Location"
          :rules="[(v) => !!v || 'You must select a location!']"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="bedrooms"
          v-model="selectedBedroom"
          label="Bedroom"
          :rules="[(v) => !!v || 'You must select a bedroom type!']"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="floors"
          v-model="selectedFloor"
          label="Floor"
          :rules="[(v) => !!v || 'You must select a floor!']"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="prices"
          v-model="selectedPrice"
          label="Price"
          :rules="[(v) => !!v || 'You must select a price!']"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md1>
        <v-menu bottom close-on-click close-on-content-click offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              align-center
              justify-end
              elevation-1
              rounded
              x-large
              color="yellow darken-2"
              v-on="on"
            >MORE</v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in filters" :key="index">
              <v-list-item-title>{{ item}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md1>
        <v-btn
          dark
          align-center
          justify-end
          elevation-1
          rounded
          x-large
          color="yellow darken-2"
          v-on:click="onFindClick"
          :loading="isFindButtonLoading"
        >FIND</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import store from "../store";
import { EventBus } from "@/event-bus";
import SearchBarSelect from "@/components/SearchBarSelect";
export default {
  name: "SearchBar",
  components: {
    SearchBarSelect
  },
  data: () => ({
    selectedLocation: undefined,
    selectedBedroom: undefined,
    selectedFloor: undefined,
    selectedPrice: undefined,
    locations: [
      "Any",
      "Summit",
      "Yeka Abado",
      "Lideta",
      "Gotera",
      "Gerji",
      "Gerji Mebrat-Hail",
      "Mickelyland",
      "Gelan",
      "Tulu Dimtu"
    ],
    bedrooms: [
      "Any",
      "Studio",
      "One Bedroom",
      "Two Bedroom",
      "Three Bedroom",
      "Shop"
    ],
    floors: [
      "Any",
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor",
      "Above Fourth Floor"
    ],
    prices: [
      "Any",
      "< $3,000",
      "$3,001 - $5,000",
      "$5,001 - $7,000",
      "$7,001 - $10,000",
      "$10,001 - $15,000",
      "> $15,000"
    ],
    filters: ["Area", "Function"]
  }),
  methods: {
    onFindClick() {
      if (this.$refs.form.validate()) {
        store.dispatch("findPressed", {
          selectedLocation: this.selectedLocation,
          selectedBedroom: this.selectedBedroom,
          selectedFloor: this.selectedFloor,
          selectedPrice: this.selectedPrice
        });
        this.$emit("search-bar-find");
      }
    }
  },
  computed: {
    isFindButtonLoading: () => store.getters.isFindButtonLoading
  },
  mounted() {
    this.$refs.form.reset();
    EventBus.$on("clearSearchBar", () => {
      this.$refs.form.reset();
    });
  }
};
</script>
