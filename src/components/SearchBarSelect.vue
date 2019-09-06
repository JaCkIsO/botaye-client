<template>
  <v-select
    :items="items"
    :label="label"
    :rules="rules"
    v-model="value"
    @input="$emit('input', value)"
    item-color="yellow darken-2"
    color="yellow"
    dark
    required
    outlined
  ></v-select>
</template>

<script>
export default {
  name: "SearchBarSelect",
  props: { items: Array, label: String, rules: Array },
  data: () => ({ value: undefined })
};
</script>
