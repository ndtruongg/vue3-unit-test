<template>
  <div>
    <h3>{{ data.title }}</h3>
    <span>{{ data.description }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Object,
    require: true,
  },
});
</script>
