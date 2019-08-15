<template>
  <span>
    <v-toolbar color="yellow darken-2" icon="brown darken-4" dark>
      <img class="mr-3" :src="require('../assets/logo.png')" height="50" />
      <v-toolbar-title>BOTAYE</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="font-weight-black white--text">FINDING YOUR NEXT BEST PLACE!</div>
      <v-spacer></v-spacer>
      <v-btn class="mx-1" dark text rounded>About Us</v-btn>
      <v-btn class="mx-1" dark text rounded>FAQ</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>


