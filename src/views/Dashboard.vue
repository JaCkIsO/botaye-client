<template>
  <span>
    <v-row>
      <v-col md="2" class="ma-0 pa-0">
        <navigation-drawer></navigation-drawer>
      </v-col>
      <v-col md="10">
        <dashboard-metrics></dashboard-metrics>
        <listing-table></listing-table>
      </v-col>
    </v-row>
  </span>
</template>
<script>
// @ is an alias to /src
import NavigationDrawer from "@/components/NavigationDrawer";
import DashboardMetrics from "@/components/DashboardMetrics";
import ListingTable from "@/components/ListingTable";

export default {
  name: "dashboard",
  components: {
    NavigationDrawer,
    ListingTable,
    DashboardMetrics
  },
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>