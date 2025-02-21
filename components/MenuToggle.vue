<script setup>
import {inject} from 'vue';
  
// Acessando o estado global do menu
const isMenuActive = inject('isMenuActive');
const toggleMenu = inject('toggleMenu');
</script>

<template>
    <svg
      class="menu-action-mobile"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="toggleMenu"
      :class="{ active: isMenuActive }"
    >
      <rect class="top-bar" x="2" y="2" width="32" height="4" fill="#0E0B0F" />
      <rect class="bottom-bar" x="2" y="30" width="32" height="4" fill="#0E0B0F" />
    </svg>
  </template>

<style scoped>
  .menu-action-mobile {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .menu-action-mobile .top-bar,
  .menu-action-mobile .bottom-bar {
    transition: transform 0.3s ease-in-out;
  }
  
  .menu-action-mobile.active .top-bar {
    transform: translateY(14px);
  }
  
  .menu-action-mobile.active .bottom-bar {
    transform: translateY(-14px);
  }
  </style>
  