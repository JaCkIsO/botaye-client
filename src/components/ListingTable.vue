<template>
  <v-data-table :loading="isTableLoading" :headers="headers" :items="listings" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Listings</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Listing</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">New Listing</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="listing.ItemCode" label="ITEM CODE"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-select :items="locations" v-model="listing.location" label="Location"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-select :items="bedrooms" v-model="listing.bedroom" label="Bedrooms"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-select :items="floors" v-model="listing.floor" label="Floor"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="listing.price" label="Price"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="listing.area" label="Area"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="listing.function" label="Function"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="listing.contact" label="Contact"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-textarea outlined name="input-7-4" label="Remarks" v-model="listing.remarks"></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <vue-upload-multiple-image
                      @upload-success="uploadImageSuccess"
                      @before-remove="beforeRemove"
                      @edit-image="editImage"
                      :data-images="images"
                      idUpload="myIdUpload"
                      editUpload="myIdEdit"
                      dragText="Drag images (multiple)"
                      browseText="(or) Select"
                      primaryText="Default"
                      markIsPrimaryText="Set as default"
                      popupText="This image will be displayed as default"
                      dropText="Drop your files here ..."
                      accept="image/gif, image/jpeg, image/png, image/bmp, image/jpg"
                    ></vue-upload-multiple-image>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon color="green darken-1" class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon color="red darken-1" @click="deleteItem(item)">delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="error">There seems to be no data!</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import store from "@/store";
import { ListingService, UploadService } from "@/api-common";
export default {
  name: "ListingTable",
  components: {
    VueUploadMultipleImage
  },
  data: () => ({
    images: [],
    locations: [
      "Summit",
      "Yeka Abado",
      "Lideta",
      "Gotera",
      "Gerji",
      "Gerji Mebrat-Hail",
      "Mickelyland",
      "Gelan",
      "Tulu Dimtu"
    ],
    bedrooms: ["Studio", "One Bedroom", "Two Bedroom", "Three Bedroom", "Shop"],
    floors: [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor",
      "Above Fourth Floor"
    ],
    dialog: false,
    headers: [
      { text: "ID", value: "id", sortable: true },
      { text: "Listing Code", value: "ItemCode", sortable: false },
      { text: "Location", value: "location", sortable: false },
      { text: "Bedroom", value: "bedroom", sortable: false },
      { text: "Price", value: "price", sortable: false },
      { text: "Contact", value: "contact", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    listing: {
      id: 0,
      ItemCode: "",
      price: 0,
      floor: "",
      bedroom: "",
      function: "Personal",
      area: "",
      location: "",
      contact: "",
      remarks: "",
      urls: []
    }
  }),

  computed: {
    listings: () => store.getters.listings,
    isTableLoading: () => store.getters.isTableDataLoading
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    store.dispatch("getAllListings");
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      ListingService.create(this.listing)
        .then(function(response) {
          console.log(response.data);
          (this.listing.id = 0),
            (this.listing.ItemCode = ""),
            (this.listing.price = 0),
            (this.listing.floor = ""),
            (this.listing.bedroom = ""),
            (this.listing.function = "Personal"),
            (this.listing.area = ""),
            (this.listing.location = ""),
            (this.listing.contact = ""),
            (this.listing.remarks = ""),
            (this.listing.urls = []);
          store.dispatch("getAllListings");
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
      //   if (this.editedIndex > -1) {
      //     Object.assign(this.desserts[this.editedIndex], this.editedItem);
      //   } else {
      //     this.desserts.push(this.editedItem);
      //   }
      this.close();
    },
    uploadImageSuccess(formData, index, fileList) {
      //   console.log("data", formData, index, fileList);
      console.log("data", index, fileList);
      console.log("filelist", fileList);
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
      UploadService.upload(formData)
        .then(function(response) {
          console.log("file", response.data.result.files.file[0].name);

          this.listing.urls.push(response.data.result.files.file[0].name);
          //   response.data.result.files.file.forEach(function(element) {
          //   });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    }
  }
};
</script>