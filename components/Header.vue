<script setup lang="ts">
import { inject } from 'vue';
</script>

<template>
    <header class="my-header">
        <ul class="grid-container">
            <li>
                <a href="#start">
                    <strong>andré oliveira</strong>
                </a>
            </li>
            <li>
                <a href="#about">sobre</a>
            </li>
            <li>
                <a href="#projects">projetos <span>4</span></a>
            </li>
            <li>
                <a href="#contact">contato</a>
            </li>
        </ul>
    </header>
</template>

<style>
    .my-header{
        background: rgba(255, 252, 245, 0.9);
        backdrop-filter: blur(20px);
        @media (min-width: 992px) {
            position: sticky;
            top: 0;
            z-index: 2;   
        }

        .grid-container{
            margin: 0;
            list-style: none;
            grid-auto-rows: auto;
            padding-top: 0;

            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
            }

            li{

                a{
                    color: #5C4A20;
                    text-decoration: none;
                    display: block;
                    padding: 12px 0;

                    span{
                        font-size: .8rem;
                        display: inline-block;
                        translate: 0 -8px;
                    }
                }
            }
        }
    }
</style>