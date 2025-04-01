<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const activeSection = ref("start");
const isMenuVisible = ref(true); // Estado para controlar a visibilidade do menu


// Função para esconder o menu quando a seção de "Contato" for clicada
const handleContactClick = () => {
  isMenuVisible.value = false;
};

const handleScroll = () => {
  const sections = ["start", "about", "projects", "contact"];
  let foundSection = "start";

  sections.forEach((section) => {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        foundSection = section;
      }
    }
  });

  activeSection.value = foundSection;

   // Verifica se a seção de "Contato" saiu da tela para mostrar o menu novamente
   const contactSection = document.getElementById('contact');
  if (contactSection) {
    const rect = contactSection.getBoundingClientRect();
    if (rect.bottom > window.innerHeight) {
        isMenuVisible.value = true; // Menu volta quando "Contato" não está mais visível
    }else{
        isMenuVisible.value = false; // Menu esconde quando "Contato" está visível
    }
  } 
};


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <header class="my-header" v-if="route.path === '/'" :class="{ 'hidden': !isMenuVisible }">
        <ul class="grid-container">
            <li>
                <a href="#start" class="menu-item" :class="{ active: activeSection === 'home' }">
                    <strong>andré oliveira</strong>
                </a>
            </li>
            <li>
                <a href="#about" class="menu-item" :class="{ active: activeSection === 'about' }">sobre</a>
            </li>
            <li>
                <a href="#projects" class="menu-item" :class="{ active: activeSection === 'projects' }">projetos</a>
            </li>
            <li>
                <a href="#contact" class="menu-item" :class="{ active: activeSection === 'contact' }">contato</a>
            </li>
        </ul>
    </header>
</template>

<style>
.my-header{
    background: rgba(255, 252, 245, 0.9);
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 2;


    display: flex;
    gap: 0;
    justify-content: space-between;

    &.hidden {
        .grid-container{
            li:nth-child(2),
            li:nth-child(3),
            li:nth-child(4){
                transform: translateY(-100%);
                transition: transform 0.9s ease;
            }

            li:nth-child(2){
                transition-delay: 0.3s; 
            }

            li:nth-child(3){
                transition-delay: 0.6s;
            }

            li:nth-child(4){
                transition-delay: 0.9s;
            }
        }
    }

    .grid-container{
        margin: 0;
        list-style: none;
        grid-auto-rows: auto;
        padding-top: 0;

        @media (max-width: 992px) {
            display: flex;
            gap: 0;
            justify-content: space-between;
        }

        li{
            transform: translateY(0%);
            transition: transform 0.3s ease;

            &:nth-child(4){
                transition-delay: 0.3s; 
            }

            &:nth-child(3){
                transition-delay: 0.6s;
            }

            &:nth-child(2){
                transition-delay: 0.9s;
            }

            .menu-item{
                color: #5C4A20;
                text-decoration: none;
                display: block;
                padding: 12px 0;
                position: relative;
                transition: color 0.3s;
                font-size: 20px;

                &.active{
                    font-weight: 600;
                }
            }
        }
    }
}


</style>