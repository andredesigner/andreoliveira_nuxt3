<script setup lang="ts">
import { inject } from 'vue';

// Criando estado global do menu
const isMenuActive = inject('isMenuActive');

// Recebendo a função closeMenu para fechar o menu ao clicar nos links
const closeMenu = inject('closeMenu');

// Função para fechar o menu ao clicar em um link
const handleLinkClick = () => {
  if (closeMenu) {
    closeMenu();
  }
};

</script>

<template>
    <header class="header-ao row">
        <div class="my-wrap">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
            <MenuToggle />
            <ul class="offset wrap-nav" :class="{ active: isMenuActive }">
                <li>
                    <NuxtLink class="btn" to="/"  @click="handleLinkClick">Início</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="btn" to="about"  @click="handleLinkClick">Sobre</NuxtLink>
                </li>
            </ul>
        </div>
    </header>
</template>