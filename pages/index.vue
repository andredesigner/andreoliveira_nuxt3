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
    <section id="start">
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
    </section>
    <section id="about">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <h2>Minha paixão está no encontro entre design e tecnologia.</h2>
                </div>
                <div class="offset-lg-3 col-lg-2">
                    <img class="d-block w-100 andre-oliveira mb-5" src="/images/andre-oliveira.png" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <p>Tenho mais de 10 anos de experiência com design. Acredito no design como uma ferramenta estratégica que aborda marcas e pessoas, olhando para o interesse desses, gerando valor para ambos os lados.</p>
                    <p>Sou designer gráfico formado pela pela <a href="" target="_blank">Universidade Belas Artes de São Paulo</a> com curso de formação em UX Design pela <a href="" target="_blank">Mergo Escola de Design</a>.</p>
                </div>
                <div class="offset-lg-1 col-lg-3">
                    <p>Trabalho em diferentes segmentos do design como  produtos digitais, websites e identidade visual. Ao longo da minha trajetória, atuei em agência, startups e ecommerce. Já passei pela <a href="" target="_blank">Innocean Brasil</a>, agência de publicidade do Grupo <a href="" target="_blank">Hyundai</a>.</p>
                </div>
                <div class="offset-lg-1 col-lg-2">
                    <p>Design Digital <br>
                    Design Gráfico <br>
                    Design de marca <br>
                    Experiência do usuário <br>
                    Interface do ususário <br>
                    Front-end <br>
                    </p>
                </div>
            </div>
        </div>
       
    </section>
    <section id="projects">
        <div class="container-fluid">
            <div class="row">
            <NuxtLink class="col-lg-6 item-project" to="/">
                <NuxtImg src="/images/projects/grupo-paes/thumb.png" />
                <h3>Grupo Paess</h3>
            </NuxtLink>
            <NuxtLink class="col-lg-6 item-project" to="/">
                <NuxtImg src="/images/projects/hyundai/thumb.png" />
                <h3>Hyundai</h3>
            </NuxtLink>
            <NuxtLink class="col-lg-6 item-project" to="/">
                <NuxtImg src="/images/projects/pib-itaquera/thumb.png" />
                <h3>PIB Itaquera</h3>
            </NuxtLink>
            <NuxtLink class="col-lg-6 item-project" to="/">
                <NuxtImg src="/images/projects/praticapp/thumb.png" />
                <h3>PraticApp</h3>
            </NuxtLink>
            </div>
        </div>
    </section>
</template>