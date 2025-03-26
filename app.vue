<template>
  <Loading v-if="showLoading" />
  <NuxtLayout >
    <NuxtRouteAnnouncer />
    <NuxtPage class="page-enter" :class="{ 'page-enter': isHome, 'page-enter': !isHome }"/>
  </NuxtLayout>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Loading from '~/components/Loading.vue';

const showLoading = ref(true);
const route = useRoute();

// Detecta se a rota atual é a home
const isHome = computed(() => route.path === '/');


onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 5000); // Aguarda 5s no máximo
});
</script>

<style>
/* Transição normal para todas as páginas */
.page-enter {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.6s ease-in-out forwards;
}

/* Força a animação da Home */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>