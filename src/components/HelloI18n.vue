<template>
  <span>
    <!-- <p>{{ $t('message') }}</p> -->
    <v-select
      solo
      max-width="30"
      dense
      :items="langs"
      v-model="$i18n.locale"
      class="locale-changer"
    ></v-select>
  </span>
</template>

<script>
export default {
  name: "HelloI18n",
  data() {
    return { langs: ["am", "en"] };
  }
};
</script>

