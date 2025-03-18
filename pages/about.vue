<script setup>
import Predinhos from '~/components/Predinhos.vue';

useHead({
  title: 'André Oliveira | UX/UI Brand Designer',
  meta: [
    { name: 'description', content: 'Designer especializado em UX/UI, web design e identidade visual. Transformo ideias em experiências e marcas.' },
    { name: 'keywords', content: 'Designer UX/UI, Web Design, Identidade Visual, Design de Produtos Digitais, Designer em São Paulo, Criação de Websites, Front-end, UX Designer, UI Designer, Programação para Designers, André Oliveira Designer' },
    { property: 'og:title', content: 'André Oliveira | UX/UI Brand Designer' },
    { property: 'og:description', content: 'Designer especializado em UX/UI, web design e identidade visual. Transformo ideias em experiências e marcas.'},
    { property: 'og:image', content: 'https://andreoliveira.des.br/.netlify/images?w=1536&fm=avif&url=%2Fimages%2Fog.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'André Oliveira | UX/UI Brand Designer' },
    { name: 'twitter:description', content: 'Designer especializado em UX/UI, web design e identidade visual. Transformo ideias em experiências e marcas.' },
    { name: 'twitter:image', content: 'https://andreoliveira.des.br/.netlify/images?w=1536&fm=avif&url=%2Fimages%2Fog.png' },
  ]
})
</script>
<template>
    <div class="row">
        <div class="col-lg-10">
          <div class="mx-100">
            <div class="breadcrumb">
              <div>Sobre</div>
            </div>
            <h1 class="about-page"><span>Olá,</span> meu nome é André Oliveira. Minha paixão está no encontro entre design, desenvolvimento web e branding.</h1>
            <p class="mt-4">Tenho mais de 10 anos de experiência com design. Acredito no design como uma ferramenta estratégica para conectar marcas e pessoas.</p>
          </div>
        </div>
        <div class="col-8 col-lg-8">
          <div class="wrap-predinhos">
            <Predinhos/>
          </div>
        </div>
        <div class="col-4 col-lg-4">
          <NuxtLink class="d-block" to="">
                <NuxtImg class="d-block w-100" format="avif,webp" src="/images/andre-oliveira.png" />
          </NuxtLink>
        </div>

        <div class="col-12 mx-100 mb-0">
          <div class="row">
            <div class="col-lg-4">
              <h3 class="d-block mt-5">Um pouco sobre mim</h3>
            </div>
            <div class="col-lg-4">
              <p class="mt-5">Sou designer gráfico formado pela pela <a href="https://www.belasartes.br/" target="_blank">Universidade Belas Artes de São Paulo</a> com curso de especialização em UX Design pela <a href="https://www.mergo.com.br/" target="_blank">Mergo Escola de Design</a> e <a href="https://designcircuit.co/" target="_blank">Design Circuit</a>.</p>
            </div>
            <div class="col-lg-4">
              <p class="mt-5">Ao longo da minha trajetória, atuei em agência, startups e ecommerce. Já passei pela <a href="https://www.innocean.com.br/" target="_blank">Innocean Brasil</a>, agência de publicidade do Grupo <a target="_blank" href="https://www.hyundai.com.br/">Hyundai</a>.</p>
            </div>
            <div class="offset-lg-4 col-lg-4">
              <p class="mt-5">Atualmente, atuo como designer freelancer, ajudando empresários e pequenas empresas a transformarem suas marcas por meio de um design estratégico, funcional e visualmente adequados.</p>
            </div>
            <div class="offset-lg-4 col-lg-4">
              <div class="mt-5">
                <a target="_blank" href="https://www.linkedin.com/in/andreoliveiradesigner/">Linkedin André Oliveira</a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mt-5">
                <a target="_blank" href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&st=i1bzr8ik&dl=0">Download do currículo 
                  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.5L12 18.3333M17 14.1667L12.5893 18.5774C12.2638 18.9028 11.7362 18.9028 11.4107 18.5774L7 14.1667" stroke="#3E5FAA" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mx-100">
          <div class="row">
            <div class="col-lg-4">
              <h3 class="d-block mt-5">Destaques</h3>
            </div>
            <div class="col-lg-4">
              <p class="mt-5">Experiência de trabalho com agências, startups e e-commerces, aprimorando a experiência que seus websites proporcionam aos usuários.</p>
            </div>
            <div class="col-lg-4">
              <p class="mt-5">Conhecimento sólido em desenvolvimento web, aplicando HTML, CSS e JavaScript para construir experiências digitais intuitivas.</p>
            </div>
            <div class="offset-lg-4 col-lg-4">
              <p class="mt-5">Participei em projetos de produtos digitais onde eu atuei em cada etapa do processo (end to end).</p>
            </div>
          </div>
        </div>
    </div>
</template>