<template>
  <h1>Measured temperatures</h1>
  <DataTable
    :value="temperatures"
    class="p-datatable-striped p-datatable-sm"
    :paginator="true"
    :rows="10"
  >
    <Column
      field="id"
      header="ID"
      sortable="true"
      headerStyle="color: #ffffff; background: #55b48c;"
      style="width: 170px"
    ></Column>
    <Column
      field="temperature"
      header="Temperature"
      sortable="true"
      headerStyle="color: #ffffff; background: #55b48c;"
      style="width: 120px"
    ></Column>
    <Column
      field="humidity"
      header="Humidity"
      sortable="true"
      headerStyle="color: #ffffff; background: #55b48c;"
      style="width: 120px"
    ></Column>
    <Column
      field="measurementDate"
      header="Date"
      sortable="true"
      headerStyle="color: #ffffff; background: #55b48c;"
      style="width: 120px"
    ></Column>
    <template #paginatorLeft>
      <Button type="button" icon="pi pi-refresh" />
    </template>
    <template #paginatorRight>
      <Button type="button" icon="pi pi-cloud" />
    </template>
  </DataTable>
</template>

<script>
import { defineComponent } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useQuery, useResult } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";

export default defineComponent({
  name: "TemperatureTable",
  components: { DataTable, Column },
  setup() {
    const { result, loading, error } = useQuery(gql`
      query temperatures {
        measurements {
          id
          temperature
          humidity
          measurementDate
        }
      }
    `);

    const temperatures = useResult(result, []);
    return {
      loading,
      error,
      temperatures,
    };
  },
});
</script>