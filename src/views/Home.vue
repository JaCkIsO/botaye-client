<template>
  <span>
    <home-hero></home-hero>
    <!-- <hello-i18n></hello-i18n> -->
  </span>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/HomeHero";
import HelloI18n from "@/components/HelloI18n";

export default {
  name: "home",
  components: {
    HomeHero,
    HelloI18n
  },
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>
