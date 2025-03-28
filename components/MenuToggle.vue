<script setup>
import {inject} from 'vue';
</script>

<template>
    <svg
      class="menu-action-mobile"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect class="top-bar" x="2" y="4" width="32" height="4" fill="#0E0B0F" />
      <rect class="bottom-bar" x="2" y="28" width="32" height="4" fill="#0E0B0F" />
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
    transform: translateY(12px);
  }
  
  .menu-action-mobile.active .bottom-bar {
    transform: translateY(-12px);
  }
  </style>
  