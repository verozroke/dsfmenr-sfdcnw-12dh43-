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
    let hiddenSubtitleElements = document.querySelectorAll('.hero__subtitle.hidden')
    let hiddenTitleElements = document.querySelectorAll('.hero__title.hidden')
    let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
    let hiddenElements = [...hiddenTitleElements, ...hiddenTextElements, ...hiddenSubtitleElements]
    hiddenElements.forEach(hiddenElement => {
    observer.observe(hiddenElement)
})
}, 0)
</script>

<template>
    <section class="hero">
        <div class="hero__overlay">
            <div class="hero__container">
                <div class="hero__subtitle hidden">Услуги макияжа</div>
                <div class="hero__title hidden">Айгерим Такаева - Визажист тренер</div>
                <div class="hero__text hidden">Подчеркиваю вашу красоту, учитывая - вашу индивидуальность, придавая больше уверенности, тогда ваш образ будет гармоничным и красивым.</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    height: 650px;
    background-image: url("https://i.imgur.com/5Ik25BK.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &__overlay {
        height: 650px;
        background-image: linear-gradient(rgba(0,0,0,0.30), rgba(46,18,0,0.70));
    }
    &__container {
        max-height: 650px;
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__subtitle {
        margin: 8em 0 8em 0;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        &.hidden {
            opacity: 0;
            transition: all 1s;
            filter: blur(20px);
            transform: translateY(150%);
        }
        &.show {
            filter: blur(0);
            opacity: 1;
            transform: translateY(0%);
        }
    }
    &__title {
        font-size: 76px;
        font-family: 'Noto Serif', serif;
        line-height: 1.1;
        letter-spacing: .5px;
        font-weight: 700;
        width: 800px;
        margin: 0 0 .5em 0;
        &.hidden {
            opacity: 0;
            transition: all 1s;
            filter: blur(20px);
            transform: translateY(150%);
        }
        &.show {
            filter: blur(0);
            opacity: 1;
            transform: translateY(0%);
        }
    }
    &__text {
        width: 800px;
        font-size: 28px;
        line-height: 1.5;
        font-family: 'Noto Serif', serif;
        &.hidden {
            opacity: 0;
            transition: all 1s;
            filter: blur(20px);
            transform: translateY(150%);
        }
        &.show {
            filter: blur(0);
            opacity: 1;
            transform: translateY(0%);
        }
    }
}


@media only screen and (max-width: 780px) {
    .hero {
        &__title {
            font-size: 56px;
        }
        &__text {
            margin: 1em 0 0 0;
            font-size: 18px;
            width: 500px;
        }
    }


}


@media only screen and (max-width: 600px) {
    .hero {
        &__title {
            font-size: 45px;
            width: 400px;
        }
        &__text {
            font-size: 16px;
            width: 340px;
        }
    }
}

@media only screen and (max-width: 280px) {
    .hero {
        &__title {
            font-size: 45px;
            width: 400px;
        }
        &__text {
            font-size: 16px;
            width: 250px;
        }
    }
}


</style>