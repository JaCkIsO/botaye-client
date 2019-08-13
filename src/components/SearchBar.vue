<template>
  <v-container>
      <v-layout justify-center  full-width row>
        <v-flex xs12 sm12 md2>
            <v-select 
            item-color="yellow"
            :items="locations"
            label="Location"
            color="yellow"
            outlined
            rounded
            background-color="brown"
            text-color="yellow"
            multiple>
            </v-select>
        </v-flex>
        <v-flex xs12 sm12 md2>
            <v-select 
            item-color="yellow"
            :items="bedrooms"
            label="Bedroom"
            color="brown"
            outlined
            background-color="yellow"
            text-color="yellow"
            rounded
            multiple></v-select>
        </v-flex>
        <v-flex xs12 sm12 md2>
            <v-select 
            item-color="yellow"
            :items="floors"
            label="Floor"
            color="brown"
            outlined
            background-color="yellow"
            text-color="yellow"
            rounded
            multiple></v-select>
        </v-flex>
        <v-flex xs12 sm12 md2>
            <v-select 
            item-color="yellow"
            :items="prices"
            label="Price"
            color="brown"
            outlined
            background-color="yellow"
            text-color="yellow"
            rounded
            multiple></v-select>
        </v-flex>
        <v-flex justify-center align-center xs12 sm12 md2>
            <v-btn @click="emitToParent()" rounded elevation-1 x-large color="yellow">FIND</v-btn>
        </v-flex> 
      </v-layout>
   
  </v-container>
</template>

<script>
export default {
    name: 'SearchBar',
    condition: true,
    data: () => ({
      locations: ['Summit', 'Gotera', 'Lideta', 'Ayat'],
      value: ['Summit Condo', 'Gotera Condo', 'Lideta', 'Ayat'],
      bedrooms: ['Studio', 'One Bedroom', 'Two Bedroom', 'Three Bedroom'],
      floors: ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor', 'Fourth Floor'],
      prices: ['< $1000', '$1001 - $2000', '$2001 - $3000', '> $3000'],

      condition: true,
    }),

    methods: {
        emitToParent (event){
            this.condition = !this.condition
            this.$emit('childToParent', this.condition);
        }
    },
};
</script>
