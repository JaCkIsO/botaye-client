<template>
  <span>
    <v-toolbar color="yellow darken-2" icon="brown darken-4" dark>
      <router-link to="/">
        <img class="mr-3" :src="require('../assets/logo.png')" height="50" />
      </router-link>
      <router-link class="toolbar-title" to="/">
        <v-toolbar-title>{{$t('botaye_caps')}}</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="font-weight-black white--text">{{$t('finding_your_next_best_place')}}</div>
      <v-spacer></v-spacer>
      <hello-i18n></hello-i18n>

      <v-btn to="/aboutus" class="mx-1" dark text rounded>{{$t('about_us')}}</v-btn>

      <v-btn to="/faq" class="mx-1" dark text rounded>{{$t('faq')}}</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
import HelloI18n from "@/components/HelloI18n";
export default {
  name: "AppNavigation",
  components: {
    HelloI18n
  }
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>


