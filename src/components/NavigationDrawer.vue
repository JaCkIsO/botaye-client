<template>
  <v-navigation-drawer class="deep-purple accent-4" dark height="100%">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>{{$t('logout')}}</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Listings", icon: "location_city" },
        { title: "Locations", icon: "place" },
        { title: "Account", icon: "account_box" }
      ]
    };
  }
};
</script>