<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm12 md10>
        <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-layout wrap>
              <v-flex v-for="item in props.items" :key="item.name" xs12 sm6 md3 lg3>
                <v-card elevation="24" max-width="444" class="mx-auto">
                  <v-carousel
                    :continuous="false"
                    :cycle="cycle"
                    :show-arrows="false"
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    height="100"
                  >
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                      <v-sheet :color="colors[i]" height="100%" tile>
                        <v-layout align-center fill-height justify-center>
                          <div class="display-3">{{ slide }} Slide</div>
                        </v-layout>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                  <!-- <v-list one-line>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        <v-list-item-subtitle>Author</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>-->
                </v-card>
              </v-flex>
            </v-layout>
          </template>

          <template v-slot:footer>
            <v-layout justify-center align-center>
              <div class="text-center">
                <v-pagination v-model="page" :length="10" :total-visible="7"></v-pagination>
              </div>
            </v-layout>
          </template>
        </v-data-iterator>
      </v-flex>
      <v-flex xs12 sm12 md2>
        <!-- <v-sheet color="yellow" height="300">AD Space</!-->
        <v-window v-model="window" vertical>
          <v-window-item v-for="n in length" :key="n">
            <v-card flat>
              <v-card-text>
                <v-layout align-center mb-4>
                  <v-avatar color="grey" class="mr-4"></v-avatar>
                  <strong class="title">Title {{ n }}</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-layout>

                <p>AD SPACE</p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SearchResult",

  data() {
    return {
      length: 3,
      window: 0,
      autorun: true,
      itemsPerPageArray: [8],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      sortBy: "name",
      keys: [
        "Name",
        "Calories",
        "Fat",
        "Carbs",
        "Protein",
        "Sodium",
        "Calcium",
        "Iron"
      ],
      items: [
        {
          name: "Frozen Yogurt"
        },
        {
          name: "Ice cream sandwich"
        },
        {
          name: "Eclair"
        },
        {
          name: "Cupcake"
        },
        {
          name: "Gingerbread"
        },
        {
          name: "Jelly bean"
        },
        {
          name: "Lollipop"
        },
        {
          name: "Honeycomb"
        },
        {
          name: "Donut"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        },
        {
          name: "KitKat"
        }
      ],
      colors: ["yellow", "green", "secondary"],
      cycle: false,
      slides: ["First", "Second", "Third"]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  },

  created() {
    setInterval(() => {
      if (!this.autorun) return;
      if (++this.window >= this.length) this.window = 0;
    }, 1000);
  }
};
</script>

<style scoped>
</style>