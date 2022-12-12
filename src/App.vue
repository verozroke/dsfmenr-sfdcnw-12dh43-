<script setup>
import HeaderSection from './components/sections/HeaderSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServiceSection from './components/sections/ServiceSection.vue'
import InfoSection from './components/sections/InfoSection.vue'
import GallerySection from './components/sections/GallerySection.vue'
import SignUpSection from './components/sections/SignUpSection.vue'
import FooterSection from './components/sections/FooterSection.vue'


</script>

<template>
  <div class="wrapper">
    <HeaderSection/>
    <HeroSection/>
    <ServiceSection/>
    <InfoSection/>
    <GallerySection/>
    <SignUpSection/>
    <FooterSection/>
  </div>
</template>

<style  lang="scss">

@import './scss/clear.scss';
@import './scss/fonts.scss';


.wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
    background-color: #fff;
}

[class*="__container"] {
    max-width: 1260px;
    margin: 0 auto;
    font-family: 'Hind', sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: normal;   
}



</style>
