<template>
  <v-card class="ma-1 pa-2">
    <v-layout row wrap>
      <v-flex md4>
        <v-card class="mx-2">
          <v-img height="240px" src="https://i.imgur.com/1VIj0U7.jpg"></v-img>

          <v-card-actions>
            <span>Item Code: SM0001</span>
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
                <td>4000 Birr</td>
              </tr>
              <tr>
                <td>Floor Level</td>
                <td>Ground Floor</td>
              </tr>
              <tr>
                <td>Number of Bedrooms</td>
                <td>2 Bedrooms</td>
              </tr>
              <tr>
                <td>Function</td>
                <td>Personal</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>72.5 m2</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Summit</td>
                <td>
                  <v-btn small color="info">See on Map</v-btn>
                </td>
              </tr>
              <tr>
                <td>Contact Information</td>
                <td>0901234567</td>
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
                  <span>Lorem ipsum, e numquam nihil voluptatem voluptatum, dolor exercitationem necessitatibus ullam, eos sed minus!</span>
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
  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Eclair",
        calories: 262
      },
      {
        name: "Cupcake",
        calories: 305
      },
      {
        name: "Gingerbread",
        calories: 356
      },
      {
        name: "Jelly bean",
        calories: 375
      },
      {
        name: "Lollipop",
        calories: 392
      },
      {
        name: "Honeycomb",
        calories: 408
      },
      {
        name: "Donut",
        calories: 452
      },
      {
        name: "KitKat",
        calories: 518
      }
    ]
  })
};
</script>