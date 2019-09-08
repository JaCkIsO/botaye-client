<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <v-data-iterator
          :items="listings"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          disable-filtering
          loading-text="Loading"
          disable-sort
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar class="mb-2" dense color="#042539" dark flat>
              <v-toolbar-title>
                <v-btn color="yellow darken-2" v-on:click="handleReturnClick">
                  <v-icon>fa-arrow-left</v-icon>
                </v-btn>
              </v-toolbar-title>
            </v-toolbar>
          </template>
          <template v-slot:default="props">
            <v-layout wrap>
              <v-flex class="ma-0 pa-1" v-for="item in props.items" :key="item.id" xs12 sm6 md2 lg3>
                <v-card
                  elevation="24"
                  max-width="444"
                  class="mx-auto"
                  v-on:click="handleSelectClick(item)"
                >
                  <v-carousel
                    :continuous="false"
                    cycle
                    :show-arrows="showArrows"
                    hide-delimiters
                    height="120"
                  >
                    <v-carousel-item v-for="(url, i) in item.urls" :key="i">
                      <v-img height="120" :src="imageUrl+url"></v-img>
                    </v-carousel-item>
                  </v-carousel>
                  <v-card-text class="text-center pa-0 ma-1">
                    <span>{{$t('item_code')}}: {{item.id}}</span>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </template>
          <template v-slot:footer v-if="listings.length > itemsPerPage">
            <v-layout justify-center align-center>
              <v-toolbar class="mt-2" color="#042539" dense dark flat>
                <v-pagination
                  color="yellow darken-2"
                  v-model="page"
                  total-visible="10"
                  :length="numberOfPages"
                ></v-pagination>
              </v-toolbar>
            </v-layout>
          </template>
        </v-data-iterator>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <v-window v-model="window" full-height vertical>
          <v-window-item v-for="n in length" :key="n">
            <v-card flat>
              <v-sheet color="blue" height="400">AD Space</v-sheet>
            </v-card>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from "../store";
import { EventBus } from "@/event-bus";
export default {
  name: "SearchResult",

  data() {
    return {
      imageUrl: "http://localhost:3000/api/containers/images/download/",
      length: 3,
      window: 0,
      autorun: true,
      showArrows: false,
      page: 1,
      itemsPerPage: 8
    };
  },
  methods: {
    handleReturnClick: function() {
      store.dispatch("searchResultBackPressed");
      EventBus.$emit("clearSearchBar");
    },
    handleSelectClick: function(item) {
      store.dispatch("searchItemSelected", { item: item });
    }
  },
  computed: {
    listings: () => store.getters.filteredListings,
    numberOfPages() {
      return Math.ceil(this.listings.length / this.itemsPerPage);
    }
  },
  created() {
    setInterval(() => {
      if (!this.autorun) return;
      if (++this.window >= this.length) this.window = 0;
    }, 1000);
  }
};
</script>