<template>
  <div v-if="show" class="loading-container">
    <div class="percentage">{{ progress }}%</div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import gsap from 'gsap';

  const progress = ref(0);
  const show = ref(true);
  const router = useRouter();
  const isPageLoaded = ref(false);

  onMounted(() => {
    gsap.to(progress, {
      value: 100,
      duration: 2, // Duração da animação
      ease: "power2.out",
      onUpdate: () => {
        progress.value = Math.round(progress.value);
      },
      onComplete: () => {
        gsap.to(".loading-container", { opacity: 0, duration: 0.5, onComplete: () => show.value = false });
      }
    });
  });
</script>

<style>
  .loading-container {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFCF5;
  color: #0E0B0F;
  z-index: 1000;
  transition: opacity 0.1s ease-in-out;
}

.percentage {
  position: absolute;
  bottom: 0;
  left: 2rem;
  font-size: 120px;
  @media ( max-width: 768px ) {
    font-size: 60px;
  }
  text-align: left;
}

.logo-loading{
  width: 80px;
}
</style>