<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <p data-test="count">{{ count }}</p>
  <button @click="increment()">increment</button>
</template>

<script>
export default {
  name: "About",

  computed: {
    count() {
      return this.$store.state.common.count;
    },
  },

  methods: {
    increment() {
      this.$store.commit("common/increment");
    },
  },
};
</script>
