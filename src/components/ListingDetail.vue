<template>
  <v-layout v-if="listing != undefined" row>
    <v-flex md4>
      <v-btn dark class="px-2 ma-2" v-on:click="handleReturnClick" color="yellow darken-2">
        <v-icon>fa-arrow-left</v-icon>
      </v-btn>
      <v-card class="mx-1">
        <v-carousel height="240">
          <v-carousel-item v-for="(url, i) in listing.urls" :key="i">
            <v-img height="240px" :src="imageUrl+url">
              <v-layout v-if="listing.isRented" align-center fill-height justify-center>
                          <div class="display-2"><v-sheet min-width="150" color="red"><v-col>{{$t('rented')}}</v-col></v-sheet></div>
                        </v-layout>
            </v-img>
          </v-carousel-item>
        </v-carousel>
        <v-card-actions>
          <span>{{$t('item_code')}}: {{listing.ItemCode}}</span>
          <v-spacer></v-spacer>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" small></v-rating>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex md4>
      <v-card class="mx-1">
        <v-simple-table>
          <tbody>
            <tr>
              <td>{{$t('price')}}</td>
              <td>{{listing.price + " " + $t('birr') }} </td>
            </tr>
            <tr>
              <td>{{$t('floor_level')}}</td>
              <td>{{$t(listing.floor)}}</td>
            </tr>
            <tr>
              <td>{{$t('number_of_bedrooms')}}</td>
              <td>{{$t(listing.bedroom)}}</td>
            </tr>
            <tr>
              <td>{{$t('function')}}</td>
              <td>{{$t(listing.function)}}</td>
            </tr>
            <tr>
              <td>{{$t('area')}}</td>
              <td>{{listing.area}}</td>
            </tr>
            <tr>
              <td>{{$t('location')}}</td>
              <td>{{$t(listing.location)}}</td>
              <td>
                <v-btn small color="info">{{$t('see_on_map')}}</v-btn>
              </td>
            </tr>
            <tr>
              <td>{{$t('contact_info')}}</td>
              <td>{{listing.contact}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-flex>
    <v-flex md4>
      <v-card class="mx-1">
        <v-simple-table>
          <tbody>
            <tr>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>{{$t('remarks')}}</v-expansion-panel-header>
                  <v-expansion-panel-content>{{listing.remarks}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
      <v-card class="mx-1 my-3">
        <GmapMap
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: auto; height: 300px"
        ></GmapMap>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import store from "../store";
export default {
  name: "ListingDetail",

  data: () => ({
    imageUrl: "https://botaye.herokuapp.com/api/containers/images/download/",
    rating: 5
  }),
  computed: {
    listing: () => store.getters.selectedSearchItem
  },
  methods: {
    handleReturnClick: function() {
      store.dispatch("listingBackPressed");
    }
  }
};
</script>