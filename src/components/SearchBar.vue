<template>
  <v-form ref="form">
    <v-layout justify-center row>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="locations.map(location => {
            newLocation = { text : '', value : ''};
            newLocation.value = location.value;
            newLocation.text = $t(location.text);
            return newLocation;})"
          v-model="selectedLocation"
          :label="$t('location')"
          :rules="[(v) => !!v || $t('select_location')]"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="bedrooms.map(bedroom => {
            newBedroom = { text : '', value : ''};
            newBedroom.value = bedroom.value;
            newBedroom.text = $t(bedroom.text);
            return newBedroom;})"
          v-model="selectedBedroom"
          :label="$t('number_of_bedrooms')"
          :rules="[(v) => !!v || $t('select_bedroom')]"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="floors.map(floor => {
            newFloor = { text : '', value : ''};
            newFloor.value = floor.value;
            newFloor.text = $t(floor.text);
            return newFloor;})"
          v-model="selectedFloor"
          :label="$t('floor_level')"
          :rules="[(v) => !!v || $t('select_floor')]"
        ></search-bar-select>
      </v-flex>
      <v-flex class="mb-0 pb-0" xs12 sm12 md2>
        <search-bar-select
          :items="prices.map(price => {
            newPrice = { text : '', value : '',minValue : 0, maxValue : 0};
            newPrice.minValue = price.minValue;
            newPrice.maxValue = price.maxValue;
            newPrice.value = price.value;
            newPrice.text = $t(price.text);
            return newPrice;})"
          v-model="selectedPrice"
          :label="$t('price')"
          :rules="[(v) => !!v || $t('select_price')]"
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
            >{{$t('more')}}</v-btn>
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
        >{{$t('find')}}</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import store from "../store";
import {
  ANY_OPTION,
  locations,
  bedrooms,
  floors,
  prices
} from "../helper/optionLists.js";
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

    locations: locations,
    bedrooms: bedrooms,
    floors: floors,
    prices: prices,
    filters: ["Area", "Function"]
  }),
  created() {
    locations.unshift({ text: ANY_OPTION, value: ANY_OPTION });
    bedrooms.unshift({ text: ANY_OPTION, value: ANY_OPTION });
    floors.unshift({ text: ANY_OPTION, value: ANY_OPTION });
    prices.unshift({ text: ANY_OPTION, value: ANY_OPTION });
  },
  methods: {
    onFindClick() {
      if (this.$refs.form.validate()) {
        store.dispatch({
          type: "findPressed",
          filters: {
            selectedLocation: this.selectedLocation,
            selectedBedroom: this.selectedBedroom,
            selectedFloor: this.selectedFloor,
            selectedPrice: this.selectedPrice
          }
        });
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
