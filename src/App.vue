<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TemperatureView :date="currentDate" />
  <TemperatureTable />
</template>

<script>
import TemperatureView from "./views/TemperatureView.vue";
import TemperatureTable from "./components/TemperatureTable.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { TemperatureView, TemperatureTable },
  data() {
    return {
      currentDate: new Date()
    }
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