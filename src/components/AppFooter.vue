<template>
  <v-footer color="yellow darken-1" padless dark>
    <v-row justify="center" no-gutters>
      <v-btn v-for="icon in icons" :key="icon" :href="icon.link" class="mx-4 white--text" icon>
        <v-icon size="24px">{{ icon.iconType }}</v-icon>
      </v-btn>
      <v-col class="yellow darken-2 py-4 text-center white--text" cols="12">
        <v-row justify="center" no-gutters>
          <div class="font-italic px-3">{{$t('privacy_policy')}}</div>
          <strong>{{ new Date().getFullYear() }} - {{$t('botaye_title')}}</strong>
          <div class="font-italic px-3">{{$t('terms_of_use')}}</div>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    icons: [
      { iconType: "fab fa-facebook", link: "https://fb.me/botayeEt" },
      { iconType: "fab fa-telegram", link: "https://t.me/botayeET" },
      {
        iconType: "fab fa-instagram",
        link: "https://www.instagram.com/botayeET/"
      },
      { iconType: "fab fa-twitter", link: "https://twitter.com/botayeET" },
      { iconType: "fab fa-linkedin", link: "#" }
    ]
  })
};
</script>