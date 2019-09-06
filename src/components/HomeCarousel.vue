<template>
  <v-flex class="my-0 py-0" xs12 sm12 md12>
    <v-carousel class="height=430" height="430" hide-delimiters>
      <v-carousel-item>
        <v-img src="https://i.imgur.com/1VIj0U7.jpg">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">FINDING YOUR NEXT BEST PLACE!</div>
          </v-layout>
        </v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="https://i.imgur.com/1VIj0U7.jpg">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">We will take care of it.</div>
          </v-layout>
        </v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="https://i.imgur.com/1VIj0U7.jpg">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">Renting has never been this easy.</div>
          </v-layout>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {};
  }
};
</script>