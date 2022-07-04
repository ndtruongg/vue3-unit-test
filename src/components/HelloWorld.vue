<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <p data-test="count">{{ count }}</p>
  <button @click="increment()">increment</button>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";

defineProps({
  msg: {
    type: String,
    require: false,
    default: "Hello World",
  },
});

const store = useStore();

const count = computed(() => store.getters["common/count"]);

const increment = () => {
  store.commit("common/increment");
};
</script>
