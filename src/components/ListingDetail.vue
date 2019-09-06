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
            <span>Item Code: {{listing.ItemCode}}</span>
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
                <td>Price</td>
                <td>{{listing.price}} Birr</td>
              </tr>
              <tr>
                <td>Floor Level</td>
                <td>{{listing.floor}}</td>
              </tr>
              <tr>
                <td>Number of Bedrooms</td>
                <td>{{listing.bedroom}}</td>
              </tr>
              <tr>
                <td>Function</td>
                <td>{{listing.function}}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{{listing.area}}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{{listing.location}}</td>
                <td>
                  <v-btn small color="info">See on Map</v-btn>
                </td>
              </tr>
              <tr>
                <td>Contact Information</td>
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
                <td>Remarks</td>
                <td>
                  <span>{{listing.remarks}}</span>
                  <!-- Add Expandable -->
                </td>
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