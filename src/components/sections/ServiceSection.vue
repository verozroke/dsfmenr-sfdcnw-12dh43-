<script setup>
import { postsFirstRow, postsSecondRow } from '../../js/post'


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
    let hiddenServiceElements = document.querySelectorAll('.service__post.hidden')
    let hiddenServiceTextElements = document.querySelectorAll('.service__text.hidden')
    let hiddenElements = [...hiddenServiceTextElements, ...hiddenServiceElements]
    hiddenElements.forEach(hiddenServiceElement => {
    observer.observe(hiddenServiceElement)
})
}, 0)

</script>



<template>
<section class="service">
            <div class="service__container">
                <div class="service__text hidden">Я визажист с 8 летним опытом работы визажистом, а так же 5 летним опытом визажиста-тренера. <br>
                    Я делаю макияж подходящий именно вам, и вашему образу. <br>
                    Мой макияж придаст вам больше уверенности, и полюбите себя еще сильней и будете ловить на себе восторженные взгляды других. <br>
                    В моем макияже будете звездой вечера, но в то же время не потеряете свою индивидуальность.</div>
                <div class="service__box">
                    <ul class="service__row">
                        <li class="service__post post hidden" v-for="post in postsFirstRow" :key="post" :id="post.id">
                            <div class="post__image">
                                <img class="post__image-img" :src="post.imageURL" alt="">
                            </div>
                            <div class="post__box">
                                <div class="post__title">{{post.title}}</div>
                                <div class="post__text">{{post.text}}</div>
                                <div class="post__cost">{{post.cost}}</div>
                            </div>
                        </li>
                    </ul>
                    <ul class="service__row">
                        <li class="service__post post hidden"  v-for="post in postsSecondRow" :key="post">
                            <div class="post__image">
                                <img class="post__image-img" :src="post.imageURL" alt="">
                            </div>
                            <div class="post__box">
                                <div class="post__title">{{post.title}}</div>
                                <div class="post__text">{{post.text}}</div>
                                <div class="post__cost">{{post.cost}}</div>
                            </div>
                        </li>
                        <li class="service__post post hidden">
                            <div class="post__image">
                                <img src="/img/service-section/6.png" id="post-6" alt="">
                            </div>
                            <div class="post__box">
                                <div class="post__title">Провожу курсы макияжа для себя и профессиональные</div>
                                <div class="post__text">
                                    <ul class="last-child">
                                        <li>курс для себя "Сам себе визажист": длительность 2 дня по 2,5 час (индивидуально).</li>
                                    <li> профессиональные курсы "Makeup expert" с 0: длительность 10 дней по 3-4 часа в день. (в группе и индивидуально).</li>
                                    <li>проф курсы повышения квалификации: длительность 3 дня по 3-4 часа в день; и 5 дней по 3-4 часа в день. (индивидуально)</li>
                                    </ul>
                                </div>
                                <div class="post__cost">от 35000 до 250000 тг.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
</template>


<style lang="scss" scoped>


.service {
    min-height: 1800px;
    background-color: #ebe5e2;
    padding-top: 20px;
    &__container {
        min-height: 1800px;
    }
    &__text {
        text-align: center;
        font-family: 'Noto Serif', serif;
        font-style: italic;
        max-width: 750px;
        font-size: 24px;
        line-height: 1.45;
        margin: 0 auto;
        padding: 135px 0 120px 0;
        &.hidden {
            opacity: 0;
            transition: all 1s;
            filter: blur(5px);
            transform: translateX(-100%);
        }

        &.show {
            filter: blur(0);
            opacity: 1;
            transform: translateX(0%);
        }
    }
    &__box {
        padding-top: 20px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
    &__row {
        display: flex;
        justify-content: space-between;
        gap: 2em;
    }
    &__post {
        width: 30%;
    }
}

.post {
    transition: .3s;
    background-color: #fff;
    &:hover {
        filter: drop-shadow(1em .5em .5em rgba(0, 0, 0, 0.5));
    }
    &__image {
        transition: .3s;
        position: relative;
        color: #fff;
        img {
            transition: .3s;
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
    }
    &__box {
        min-height: 204px; 
        padding: 27px 30px;
        font-family: 'Roboto', sans-serif;
        color: #000000;
    }
    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 1.35;
        text-align: left;
    }
    &__text {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.55;
        margin-top: 8px;
        max-width: 280px;
    }
    &__cost {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.35;
        margin-top: 12px;
    }
    &.active {
        z-index: 1000;
        position: fixed;
        left: 33.333%;
        top: 5%;
        transform: scale(100%);
        right: 33.333%;
    }
    &.hidden {
        opacity: 0;
        transition: all .5s;
        filter: blur(5px);
        transform: translateX(-100%);
    }

    &.show {
        filter: blur(0);
        filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.5));
        opacity: 1;
        transform: translateX(0%);
    }
}

.post:hover {
    transform: scale(1.05);
    transition: .3s;
}

.last-child>li {
    list-style: disc outside;
}

#last-post {
    padding-left: 20px;
}


@media(prefers-reduced-motion) {
    .hidden {
        transition: none;
    }
}

@media only screen and (max-width: 964px) {
    .service {
        min-height: 1900px;
        &__container {
            min-height: 1900px;
        }
    }
}


@media only screen and (max-width: 857px) {
    .service {
        min-height: 3700px;
        &__container {
            min-height: 3700px;
        }
        &__row {
            flex-direction: column;
        }
    }
    .post {
        width: 75%;
        margin: 0 auto;
    }

}

@media only screen and (max-width: 780px) {
    
    .service {
        min-height: 3850px;
        &__container {
            min-height: 3850px;
        }
        &__text {
            font-size: 18px;
            padding: 135px 20px 120px 20px;
        }
    }
}

@media only screen and (max-width: 281px) {
    .post {
        &__title {
            font-size: 18px;
        }
    }
    .service {
        min-height: 4300px;
        &__container {
            min-height: 4300px;
        }
    }
}


</style>