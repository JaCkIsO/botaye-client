<template>
  <v-card v-if="listing != undefined" color="#042539" height="440" class="ma-1 pa-2">
    <v-layout row wrap>
      <v-flex md4>
        <v-btn
          dark
          class="px-2 ma-2"
          v-on:click="$emit('listing-detail-back',1)"
          color="yellow darken-2"
        >
          <v-icon>fa-arrow-left</v-icon>
        </v-btn>
        <v-card class="mx-2">
          <v-carousel height="240">
            <v-carousel-item v-for="(url, i) in listing.urls" :key="i">
              <v-sheet color="green" height="130" tile>
                <v-layout align-center fill-height justify-center>
                  <v-img :src="'http://localhost:3000/api/containers/images/download/'+url"></v-img>
                  <!-- <div>  {{ url }}</div> -->
                </v-layout>
              </v-sheet>
            </v-carousel-item>
            <!-- <v-carousel-item>
              <v-img height="240px" src="https://i.imgur.com/1VIj0U7.jpg"></v-img>
            </v-carousel-item>-->
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
                <td>{{listing.price}} Birr</td>
              </tr>
              <tr>
                <td>{{$t('floor_level')}}</td>
                <td>{{listing.floor}}</td>
              </tr>
              <tr>
                <td>{{$t('number_of_bedrooms')}}</td>
                <td>{{listing.bedroom}}</td>
              </tr>
              <tr>
                <td>{{$t('function')}}</td>
                <td>{{listing.function}}</td>
              </tr>
              <tr>
                <td>{{$t('area')}}</td>
                <td>{{listing.area}}</td>
              </tr>
              <tr>
                <td>{{$t('location')}}</td>
                <td>{{listing.location}}</td>
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
  </v-card>
</template>
<script>
export default {
  name: "ListingDetail",
  props: {
    listing: {
      type: Object
    }
  },
  data: () => ({
    rating: 5
  })
};
</script>