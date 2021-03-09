<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TemperatureView :date="currentDate" />
  <TemperatureTable />
</template>

<script>
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provide, defineComponent } from "vue";
import TemperatureView from "./views/TemperatureView.vue";
import TemperatureTable from "./components/TemperatureTable.vue";

const client = new ApolloClient({
  uri: "http://37.120.176.60:4000/",
  cache: new InMemoryCache(),
});

export default defineComponent({
  name: "App",
  components: { TemperatureView, TemperatureTable },
  setup() {
    provide(DefaultApolloClient, client);
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>}