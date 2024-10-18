<template>
    <div class="menu-toggle" @click="toggleMenu">
      &#9776; 
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      toggleMenu() {
        this.$emit('toggle'); 
      }
    }
  };
  </script>
  
  <style scoped>
  .menu-toggle {
    display: block;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
  }
  </style>
  