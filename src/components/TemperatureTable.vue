<template>
<h1>Measured temperatures</h1>
    <DataTable :value="temperatures">
        <Column field="id" header="ID"></Column>
        <Column field="temperature" header="Temperature"></Column>
        <Column field="humidity" header="Humidity"></Column>
        <Column field="measurementDate" header="Date"></Column>
    </DataTable>
</template>

<script>
import { defineComponent } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
  name: "TemperatureTable",
  components: { DataTable, Column },

  data() {
    return {
      temperatures: [
        {
          id: "60453fd42fc4b508695482a3",
          temperature: 22.2,
          humidity: 50.5,
          measurementDate: "1615151060350",
        },
        {
          id: "60453d7b2fc4b508695482a2",
          temperature: 22.2,
          humidity: 50.6,
          measurementDate: "1615150459443",
        },
        {
          id: "60453b222fc4b508695482a1",
          temperature: 22.2,
          humidity: 50.7,
          measurementDate: "1615149858633",
        },
        {
          id: "604538c92fc4b508695482a0",
          temperature: 22.2,
          humidity: 50.6,
          measurementDate: "1615149257814",
        },
        {
          id: "604536712fc4b5086954829f",
          temperature: 22.2,
          humidity: 50.4,
          measurementDate: "1615148657008",
        },
        {
          id: "604534182fc4b5086954829e",
          temperature: 22.2,
          humidity: 50.1,
          measurementDate: "1615148056193",
        },
        {
          id: "604531bf2fc4b5086954829d",
          temperature: 22.3,
          humidity: 50.1,
          measurementDate: "1615147455425",
        },
        {
          id: "60452f662fc4b5086954829c",
          temperature: 22.2,
          humidity: 50.4,
          measurementDate: "1615146854583",
        },
        {
          id: "60452d0d2fc4b5086954829b",
          temperature: 22.2,
          humidity: 49.6,
          measurementDate: "1615146253813",
        },
      ],
    };
  },
});
</script>