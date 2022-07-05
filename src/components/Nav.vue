<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </nav>

  <button @click="login">Login</button>
  <button data-test="dropdown" @click="showDropdown">Dropdown</button>
</template>

<script setup>
import { ref } from "vue";

const admin = ref(false);
const shouldShowDropdown = ref(false);

// for test
const login = () => {
  admin.value = true;
};

const showDropdown = () => {
  shouldShowDropdown.value = true;
};
</script>
