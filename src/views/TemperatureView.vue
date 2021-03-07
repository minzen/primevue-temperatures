<template>
  <div id="container">
    <div>Hello! The current time is {{ current }}!</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TemperatureView",
  props: {
    date: Date,
  },
  setup(props) {
    const dateVal = ref(props.date);
    console.log(dateVal.value);

    const formatDate = (value) => {
      return new Date(value).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };

    const current = formatDate(dateVal.value);
    return {
      current,
    };
  },
});
</script>
