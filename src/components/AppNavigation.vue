<template>
  <span>
    <v-toolbar prominent color="brown" icon="brown darken-4" dark>
      <v-layout column>
        <!-- <v-flex xs12 sm12 md9 offset-md3>
          <v-sheet width="2000" height="90" color="orange lighten-2">This is an AD Space.</v-sheet>
        </v-flex>-->
        <v-layout>
          <v-flex xs12 sm12 md3>
            <v-toolbar-title>BOTAYE</v-toolbar-title>
          </v-flex>
          <v-flex xs12 sm12 md3 offset-md6>
            <!-- <div class="font-weight-black white--text text-xs-center">FINDING YOUR NEXT BEST PLACE!</div> -->

            <v-btn color="yellow darken-1" class="hidden-sm-and-down" flat>About Us</v-btn>

            <v-btn color="yellow darken-1" class="hidden-sm-and-down">FAQ</v-btn>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>

<style scoped>
</style>


