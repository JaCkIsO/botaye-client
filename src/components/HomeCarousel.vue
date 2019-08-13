<template>
  <v-flex xs12 sm12 md10>
    <v-carousel height="300" width="m">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-layout align-center fill-height justify-center>
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>