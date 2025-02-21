<script setup lang="ts">
import { inject } from 'vue';

// Criando estado global do menu
const isMenuActive = inject('isMenuActive');

// Recebendo a função closeMenu para fechar o menu ao clicar nos links
const closeMenu = inject('closeMenu');

if (!closeMenu) {
  console.error('❌ ERRO: closeMenu não foi injetado corretamente!');
}

// Função para fechar o menu ao clicar em um link
const handleLinkClick = () => {
  if (closeMenu) {
    closeMenu();
  }
};

</script>

<template>
    <header class="header-ao row">
        <div class="offset-lg-1 col-lg-10 d-flex justify-content-between">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
            <MenuToggle />
            <ul class="wrap-nav" :class="{ active: isMenuActive }">
                <li>
                    <NuxtLink class="btn" to="/"  @click="handleLinkClick">Início</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="btn" to="/projects/"  @click="handleLinkClick">Projetos</NuxtLink>
                </li>
            </ul>
        </div>
    </header>
</template>