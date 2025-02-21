<script setup>
useHead({
  title: 'André Oliveira | UX/UI Brand Designer',
  meta: [
    { name: 'description', content: 'Designer especializado em UX/UI, web design e identidade visual. Transformo ideias em experiências e marcas.' },
    { name: 'keywords', content: 'Designer UX/UI, Web Design, Identidade Visual, Design de Produtos Digitais, Designer em São Paulo, Criação de Websites, Front-end, UX Designer, UI Designer, Programação para Designers, André Oliveira Designer' },
    { property: 'og:title', content: 'André Oliveira | UX/UI Brand Designer' },
    { property: 'og:description', content: 'Designer especializado em UX/UI, web design e identidade visual. Transformo ideias em experiências e marcas.'},
    { property: 'og:image', content: 'https://example.com/imagem.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
})
</script>
<template>
    <div class="row">
        <div class="offset-lg-1 col-lg-7">
            <div class="mx-100">
                <h1><span>Designer</span> André Oliveira</h1>
                <p class="big-text mt-20">Designer de São Paulo, especializado em design de produtos digitais, criação e desenvolvimento de websites e identidade visual.</p>
            </div>
        </div>
    </div>
    <div class="row border-top-mobile">
        <div class="offset-lg-1 col-lg-6 no-spacing">
            <div class="wrap-content d-flex flex-column align-items-baseline not-border-mobile">
                <h2>Sobre</h2>
                <p class="mb-0">Sou André Oliveira, designer gráfico formado pela pela <a href="https://www.belasartes.br/" target="_blank">Universidade Belas Artes de São Paulo</a> com especialização em UX Design pela <a href="https://www.mergo.com.br/" target="_blank">Mergo Escola de Design</a>. Ao longo da minha trajetória, atuei em agência, startups e ecommerce, minha última experiência foi na <a href="https://www.innocean.com.br/" target="_blank">Innocean Brasil</a>.</p>
                <a class="link-ao mt-40" href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&st=5kf9mpoj&dl=0" target="_blank">Download currículo 
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7.5L12 18.3333M17 14.1667L12.5893 18.5774C12.2638 18.9028 11.7362 18.9028 11.4107 18.5774L7 14.1667" stroke="#9747FF" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="col-lg-4 no-spacing">
            <div class="wrap-content">
                <div>
                    <h2>Habilidades</h2>
                    <ul class="mb-0">
                        <li>UX/UI Design</li>
                        <li>Figma</li>
                        <li>Web Design</li>
                        <li>Webflow</li>
                        <li>Wordpress</li>
                        <li>HTML, CSS, Javascript</li>
                        <li>Github</li>
                        <li>Identidade Visual</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row border-bottom-mobile">
        <div class="offset-lg-1 col-lg-4 no-spacing">
            <div class="wrap-content p-0">
                <NuxtPicture loading="lazy" classs="d-block w-100" format="avif,webp" src="/images/andre-oliveira.png" />
            </div>
        </div>
        <div class="col-lg-6 no-spacing">
            <div class="wrap-content pb-0">
                <div>
                    <h2>Propósito</h2>
                    <p class="mb-0">Acredito no design como uma ferramenta estratégica para conectar marcas e pessoas. Minha abordagem une criatividade e tecnologia, combinando design e código para criar experiências visuais funcionais.</p>
                </div>
                <Predinhos class="w-100 mt-40" style="" />
            </div>
        </div>
    </div>
</template>