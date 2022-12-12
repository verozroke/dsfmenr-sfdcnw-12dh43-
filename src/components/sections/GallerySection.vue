<script setup>
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            
        } else {
            entry.target.classList.remove('show')
        }
        
    })
})

setTimeout(() => {
    let hiddenElements = document.querySelectorAll('.grid__div.hidden')
    hiddenElements.forEach(hiddenServiceElement => {
    observer.observe(hiddenServiceElement)
})
}, 0)
</script>


<template>
<section class="gallery">
            <div class="gallery__container">
                <div class="gallery__title">Мои работы</div>
                <div class="gallery__block">
                    <div class="grid-wrapper">
                        <div class="grid__div hidden"><img src="../img/gallery-section/1.jfif" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/2.jfif" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/3.jfif" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/4.jfif" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/5.jfif" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/6.jfif" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/vodosvinka-ili-kapibara.jpg" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/vodosvinka-ili-kapibara.jpg" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/vodosvinka-ili-kapibara.jpg" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/vodosvinka-ili-kapibara.jpg" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/vodosvinka-ili-kapibara.jpg" alt=""></div>
                        <div class="grid__div hidden"><img src="../img/gallery-section/vodosvinka-ili-kapibara.jpg" alt=""></div>
                    </div>
                </div>
                <div class="gallery__subtitle">Смотрите больше примеров работ наших мастеров в социальных сетях</div>
                <!-- <div class="gallery__medias"></div> -->
                <ul class="gallery__medias">
                    <li class="gallery__media" id="insta"><a  target="_blank" href="https://www.instagram.com/aigerimtakayeva/"><svg class="t-sociallinks__svg" width="48px" height="48px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path width="40px" height="40px" d="M66.9644 10H33.04C20.3227 10 10 20.3227 10 32.9573V67.1167C10 79.6816 20.3227 90 33.04 90H66.96C79.6816 90 90 79.6816 90 67.0384V32.9616C90.0044 20.3227 79.6816 10 66.9644 10ZM29.2 50.0022C29.2 38.5083 38.5257 29.2 50.0022 29.2C61.4786 29.2 70.8 38.5083 70.8 50.0022C70.8 61.4961 61.4743 70.8 50.0022 70.8C38.5257 70.8 29.2 61.4961 29.2 50.0022ZM72.8854 31.2027C70.2079 31.2027 68.0789 29.0824 68.0789 26.4049C68.0789 23.7273 70.2035 21.6027 72.8854 21.6027C75.5586 21.6027 77.6833 23.7273 77.6833 26.4049C77.6833 29.0824 75.5586 31.2027 72.8854 31.2027Z" fill="#000000"></path>
<path d="M50.0022 36.4011C42.4659 36.4011 36.4011 42.4876 36.4011 50.0022C36.4011 57.5124 42.4659 63.6033 50.0022 63.6033C57.5429 63.6033 63.6033 57.5124 63.6033 50.0022C63.6033 42.492 57.4514 36.4011 50.0022 36.4011Z" fill="#000000"></path>
</svg></a></li>
                    <li class="gallery__media" id="facebook"><a target="_blank" href="https://www.facebook.com/aika.serikova"><svg class="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.3077 14.1204C46.4333 11.1506 50.8581 10.1412 55.0516 10.0244C59.4777 9.98539 63.9037 10.0049 68.3285 10.0049C68.348 14.683 68.348 19.3416 68.3285 24.0197C65.4757 24.0197 62.6021 24.0197 59.7492 24.0197C57.9435 23.9028 56.0805 25.2811 55.7505 27.0868C55.7116 30.2125 55.7311 33.3369 55.7311 36.4625C59.9233 36.482 64.1168 36.4625 68.3091 36.482C67.9986 41.0042 67.436 45.5082 66.7761 49.9732C63.0684 50.0122 59.3608 49.9732 55.6531 49.9927C55.6142 63.3281 55.6726 76.6439 55.6336 89.9805C50.1203 90 44.6276 89.961 39.1142 90C39.0168 76.6646 39.1142 63.3293 39.0558 49.9927C36.377 49.9732 33.6788 50.0122 31 49.9732C31.0195 45.4887 31 41.0054 31 36.5404C33.6788 36.5015 36.377 36.5404 39.0558 36.521C39.1337 32.1728 38.9778 27.8052 39.1337 23.4571C39.4259 19.9833 40.7263 16.5082 43.3077 14.1204Z" fill="#000000"></path>
</svg></a></li>
                    <li class="gallery__media" id="tiktok"><a target="_blank" href="https://www.tiktok.com/@aika.takayeva"><img src="../img/gallery-section/icons/tiktok.svg" alt=""></a></li>
                </ul>
            </div>
        </section>
</template>

<style lang="scss" scoped>
.gallery {
    background-color: #ebe5e2;
    min-height: 1700px;
    &__container {
        min-height: 1700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 75px 0 20px 0;
    }
    &__block {
        width: 60em;
    }
    &__title {
        font-size: 42px;
        line-height: 1.23;
        font-family: 'Roboto' ,sans-serif;
        color: #000000;
        font-weight: bold;
        margin-bottom: 75px;
    }
    &__medias {
        display: flex;
        gap: 1em;
    }
    &__media {
        width: 40px;
        height: 40px;
        & > a {
            width: 40px;
            height: 40px;
            & > img {
                width: 40px;
                height: 40px;
            }
        }
    }
    &__subtitle {
        margin: 3em  0  1em  0;
        font-size: 24px;
        width: 700px;
        text-align: center;
        font-family: 'Roboto' ,sans-serif;
        font-weight: 300;
        line-height: 1.45;
    }  
}

.hidden {
    opacity: 0;
    transition: all 1s;
}

.show {
    opacity: 1;
}

#insta {
    width: 48px;
    height: 48px;
}

#tiktok {
    padding-top: 4px;
}

#facebook {
    padding-top: 3.5px;
}


img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
}

.grid-wrapper > div{
    display: flex;
    justify-content: center;
    align-items: center;
}


.grid-wrapper > div > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: .3s;
    filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.5));
    &:hover {
        transform: scale(1.15);
        transition: .3s;
    }
}

.grid-wrapper {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    grid-auto-flow: dense;
}


@media(prefers-reduced-motion) {
    .hidden {
        transition: none;
    }
}


@media only screen and (max-width: 1000px) {
    .grid-wrapper {
        margin: 0 auto;
        width: 600px;      
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 300px;  
    }
    .grid-wrapper > div > img {
        &:hover {
            transform: scale(1.05);
            transition: .3s;
        }
    }
}

@media only screen and (max-width: 600px) {
    .grid-wrapper {
        margin: 0 auto;
        width: 400px;      
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 400px;  
    }
    .grid-wrapper > div > img {
        &:hover {
            transform: scale(1.05);
            transition: .3s;
        }
    }
    .gallery__subtitle {
        width: 400px;
    }
}

@media only screen and (max-width: 428px) {
    .grid-wrapper {
        margin: 0 auto;
        width: 250px;      
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 250px;  
    }
    .grid-wrapper > div > img {
        &:hover {
            transform: scale(1.05);
            transition: .3s;
        }
    }
    .gallery__subtitle {
        width: 250px;
    }
}

@media only screen and (max-width: 281px) {
    .grid-wrapper {
        margin: 0 auto;
        width: 200px;      
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 200px;  
    }
    .grid-wrapper > div > img {
        &:hover {
            transform: scale(1.05);
            transition: .3s;
        }
    }
    .gallery__title {
        font-size: 30px;
    }
}

</style>