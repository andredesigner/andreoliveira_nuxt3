<script setup lang="ts">
import { ref, provide, watch } from 'vue';


// Criando estado global do menu
const isMenuActive = ref(false);

// Função para alternar o estado
const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
};

// Adicionando/removendo a classe "active" ao body quando o estado mudar
watch(isMenuActive, (newVal) => {
  document.body.classList.toggle('active', newVal);
});

// Fechar o menu
const closeMenu = () => {
  isMenuActive.value = false;
};


// Disponibilizando o estado e a função para outros componentes
provide('isMenuActive', isMenuActive);
provide('toggleMenu', toggleMenu);
provide('closeMenu', closeMenu);
</script>


<template>
    <div class="colored-slice" :class="{ active: isMenuActive }"></div>
    <div class="container-fluid">
        <Header />
        <slot></slot>
        <Footer />
    </div>
</template>