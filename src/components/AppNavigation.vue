<template>
  <span>
    <v-toolbar color="yellow darken-2" icon="brown darken-4" dark>
      <img class="mr-3" :src="require('../assets/logo.png')" height="50" />
      <v-toolbar-title>{{$t('botaye_caps')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="font-weight-black white--text">{{$t('finding_your_next_best_place')}}</div>
      <v-spacer></v-spacer>
      <hello-i18n></hello-i18n>
      <router-link to="/aboutus"><v-btn class="mx-1" dark text rounded>{{$t('about_us')}}</v-btn></router-link>
      <router-link to="/faq"><v-btn class="mx-1" dark text rounded>{{$t('faq')}}</v-btn></router-link>
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


