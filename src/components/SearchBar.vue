<template>
  <v-layout justify-center row>
    <v-flex xs12 sm12 md2>
      <v-select
        :items="locations"
        label="Location"
        item-color="yellow darken-2"
        background-color="yellow darken-2"
        hide-details
        multiple
        clearable
        open-on-clear
        solo
        dark
      >
        <template v-slot:selection="{ item, index }">
          <v-chip color="#042539" text-color="white" x-small v-if="index === 0">
            <span class="caption">{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="caption">(+{{ locations.length - 1 }} others)</span>
        </template>
        <template v-slot:append-item>
          <v-divider class="mb-2"></v-divider>
          <v-list-item disabled>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn color="success">
                  <v-icon>mdi-map</v-icon>Select On Map
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
    </v-flex>
    <v-flex xs12 sm12 md2>
      <v-select
        :items="bedrooms"
        label="Bedroom"
        item-color="yellow darken-2"
        background-color="yellow darken-2"
        hide-details
        multiple
        clearable
        open-on-clear
        solo
        dark
      >
        <template v-slot:selection="{ item, index }">
          <v-chip color="#042539" text-color="white" x-small v-if="index === 0">
            <span class="caption">{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="caption">(+{{ bedrooms.length - 1 }} others)</span>
        </template>
      </v-select>
    </v-flex>
    <v-flex xs12 sm12 md2>
      <v-select
        :items="floors"
        label="Floor"
        item-color="yellow darken-2"
        background-color="yellow darken-2"
        hide-details
        multiple
        clearable
        open-on-clear
        solo
        dark
      >
        <template v-slot:selection="{ item, index }">
          <v-chip color="#042539" text-color="white" x-small v-if="index === 0">
            <span class="caption">{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="caption">(+{{ floors.length - 1 }} others)</span>
        </template>
      </v-select>
    </v-flex>
    <v-flex xs12 sm12 md2>
      <v-select
        :items="prices"
        label="Price"
        item-color="yellow darken-2"
        background-color="yellow darken-2"
        hide-details
        multiple
        clearable
        open-on-clear
        solo
        dark
      >
        <template v-slot:selection="{ item, index }">
          <v-chip color="#042539" text-color="white" x-small v-if="index === 0">
            <span class="caption">{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="caption">(+{{ prices.length - 1 }} others)</span>
        </template>
      </v-select>
    </v-flex>
    <!-- <v-flex xs12 sm12 md1>
      <v-overflow-btn
        class="my-0 py-0"
        :items="dropdown_font"
        label="Overflow Btn"
        align-center
        justify-end
        roundedelevation-1
        x-large
        color="yellow"
      ></v-overflow-btn>
    </v-flex>-->
    <v-flex xs12 sm12 md1>
      <v-btn dark align-center justify-end rounded elevation-1 x-large color="yellow darken-2">FIND</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    locations: ["Summit", "Gotera", "Lideta", "Ayat"],
    value: ["Summit Condo", "Gotera Condo", "Lideta", "Ayat"],
    bedrooms: ["Studio", "One Bedroom", "Two Bedroom", "Three Bedroom"],
    floors: [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor"
    ],
    prices: ["< $1000", "$1001 - $2000", "$2001 - $3000", "> $3000"]
  })
};
</script>
