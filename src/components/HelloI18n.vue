<template>
  <span>
    <v-radio-group row hide-details v-model="$i18n.locale">
      <v-radio label="አማርኛ" :value="langs[0]"></v-radio>
      <v-radio label="English" :value="langs[1]"></v-radio>
    </v-radio-group>
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

