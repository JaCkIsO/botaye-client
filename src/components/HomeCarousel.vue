<template>
  <v-flex class="my-0 py-0" xs12 sm12 md12>
    <v-carousel class="height=430" height="430" hide-delimiters>
      <v-carousel-item>
        <v-img height="430" src="https://i.imgur.com/1VIj0U7.jpg">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">{{$t('finding_your_next_best_place')}}</div>
          </v-layout>
        </v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img height="430" src="https://i.imgur.com/1VIj0U7.jpg">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">{{$t('we_will_take_care_of_it')}}</div>
          </v-layout>
        </v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img height="430" src="https://i.imgur.com/1VIj0U7.jpg">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">{{$t('renting_has_never_been_this_easy')}}</div>
          </v-layout>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {};
  }
};
</script>