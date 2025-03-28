<script setup>
useHead({
  title: 'André Oliveira | UX/UI & Brand Designer',
  meta: [
    { name: 'description', content: 'Processos sólidos para criar experiências e marcas.' },
    { name: 'keywords', content: 'Designer UX/UI, Web Designer, Identidade Visual, Design de Produtos Digitais, Designer em São Paulo, Criação de Websites, Front-end, UX Designer, UI Designer, Programação para Designers, André Oliveira Designer' },

    { property: 'og:title', content: 'André Oliveira | UX/UI & Brand Designer' },
    { property: 'og:description', content: 'Processos sólidos para criar experiências e marcas.'},
    { property: 'og:image', content: 'https://andreoliveira.des.br/images/og.png' },
    { property: 'og:url', content: 'https://andreoliveira.des.br/' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'André Oliveira | UX/UI & Brand Designer' },
    { name: 'twitter:description', content: 'Processos sólidos para criar experiências e marcas.' },
    { name: 'twitter:image', content: 'https://andreoliveira.des.br/images/og.png' },
  ]
})


onMounted(() => {
    const container = document.querySelector(".grid-title");

    const rows = 1;
    const cols = 4;

    for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("item"); // Adiciona a classe .item
    container.appendChild(cell);
    }
});

</script>
<template>
    <div id="start">
        <div class="grid-container">
            <div class="item"></div>
            <div class="item"></div> 
            <div class="item"></div> 
            <div class="item"></div> 
            <div class="full-row">
                <h1>Processos sólidos para criar experiências digitais e marcas.</h1>
                <div class="grid-container grid-title"></div>
            </div>
        </div>
    </div>
    <div id="about">
        <div class="grid-container">
            <div class="item">
                <h2>Minha paixão está no encontro entre design e tecnologia.</h2>
            </div>
            <div class="item">
                <p>Tenho mais de 10 anos de experiência com design. Acredito no design como uma ferramenta estratégica que aborda marcas e pessoas, olhando para o interesse desses e gerando valor para ambos os lados.</p>
            </div>
            <div class="item">
                <img class="d-block w-100 andre-oliveira" src="/images/andre-oliveira.png" alt="">
            </div>
            <div class="item">
                <p>Trabalho em diferentes segmentos do design como  produtos digitais, websites e identidade visual.</p>
                <p>Esse portfólio foi desenvolvido por mim utilizando <a href="" target="_blank">Nuxt3 </a>.</p>
            </div>
            <div class="item linkedin">
                <a href="">Linkedin</a>
            </div>
            <div class="item curriculo">
                <a href="">Currículo</a>
            </div>
            <div class="item">
            <p>Sou designer gráfico formado pela pela <a href="" target="_blank">Universidade Belas Artes de São Paulo</a> com curso de especialização em UX Design pela <a href="" target="_blank">Mergo Escola de Design</a> e <a href="" target="_blank">Design Circuit</a>.</p>
            </div>
            <div class="item">
                <p>Ao longo da minha trajetória, atuei em agência, startups e ecommerce. Já passei pela <a href="" target="_blank">Innocean Brasil</a>, agência de publicidade do Grupo <a href="" target="_blank">Hyundai</a>.</p>
            </div>
        </div>
    </div>
    <div id="projects">
        <div class="grid-container">
            <NuxtLink class="item-project" to="/">
                <NuxtImg src="/images/projects/grupo-paes/thumb.png" />
                <h3>Grupo Paess</h3>
            </NuxtLink>
            <NuxtLink class="item-project" to="/">
                <NuxtImg src="/images/projects/hyundai/thumb.png" />
                <h3>Hyundai</h3>
            </NuxtLink>
            <NuxtLink class="item-project" to="/">
                <NuxtImg src="/images/projects/pib-itaquera/thumb.png" />
                <h3>PIB Itaquera</h3>
            </NuxtLink>
            <NuxtLink class="item-project" to="/">
                <NuxtImg src="/images/projects/praticapp/thumb.png" />
                <h3>PraticApp</h3>
            </NuxtLink>
        </div>
    </div>
</template>