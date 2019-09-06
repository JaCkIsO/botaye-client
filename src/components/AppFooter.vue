<template>
  <v-footer color="yellow darken-1" padless dark>
    <v-row justify="center" no-gutters>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
      <v-col class="yellow darken-2 py-4 text-center white--text" cols="12">
        <v-row justify="center" no-gutters>
          <div class="font-italic px-3">Privacy Policy</div>
          <strong>{{ new Date().getFullYear() }} - Botaye</strong>
          <div class="font-italic px-3">Terms of Use</div>
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
      "fab fa-facebook",
      "fab fa-telegram",
      "fab fa-instagram",
      "fab fa-twitter",
      "fab fa-linkedin"
    ]
  })
};
</script>