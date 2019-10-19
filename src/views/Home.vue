<template>
  <span>
    <home-hero></home-hero>
    <!-- <hello-i18n></hello-i18n> -->
  </span>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/HomeHero";

export default {
  name: "home",
  components: {
    HomeHero
  },
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>
