<template>
  <div>==LOGIN PAGE==</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const refData = ref(0);
    return {
      refData,
    };
  },
});
</script>
<style scoped></style>
