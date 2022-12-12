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
    let hiddenPointElements = document.querySelectorAll('.info__point.hidden')
    let hiddenBoxElements = document.querySelectorAll('.info__box.hidden')
    let hiddenElements = [...hiddenPointElements, ...hiddenBoxElements]
    hiddenElements.forEach(hiddenElement => {
    observer.observe(hiddenElement)
})
}, 0)
</script>


<template>
<section class="info">
            <div class="info__container">
                <div class="info__title">На моих курсах макияжа</div>
                <div class="info__block">
                    <ul class="info__list">
                        <li class="info__el">
                            <div class="info__logo">
                                <div class="info__point hidden">1</div>
                            </div>
                            <div class="info__box hidden">
                                <div class="info__subtitle">Ассиметричная форма бровей</div>
                                <div class="info__text">Проблему ассиметричности бровей мы решаем с помощью коррекции и окрашивания хной или краской. Ваши брови будут не только симметричными, но и подходящими под ваш тип лица.</div>
                            </div>
                        </li>
                        <li class="info__el">
                            <div class="info__logo">
                                <div class="info__point hidden">2</div>
                            </div>
                            <div class="info__box hidden">
                                <div class="info__subtitle">Слишком тонкие или густые брови</div>
                                <div class="info__text">Архитектура бровей помогает решить проблему редких, тонких или слишком густых бровей. Мы создаем форму, подходящую под ваш тип лица с помощью коррекции и окрашивания.</div>
                            </div>
                        </li>
                        <li class="info__el">
                            <div class="info__logo">
                                <div class="info__point hidden">3</div>
                            </div>
                            <div class="info__box hidden">
                                <div class="info__subtitle">Необходимость ежедневно подкрашивать брови</div>
                                <div class="info__text">Архитектура бровей не только подчеркивает ваши черты лица, но и избавляет от необходимости применять макияж каждое утро. Окрашивание хной держится 3–4 недели, окрашивание краской до 2х недель.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
.info {
    min-height: 600px;
    &__container {
        min-height: 600px;
        font-family: 'Roboto', sans-serif;
        padding:  130px 0 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        font-size: 42px;
        line-height: 1.23;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        text-align: center;
        margin-bottom: 100px;


    }
    &__list {
        width: 760px;
        display: flex;
        flex-direction: column;
    }
    &__el {
        display: flex;
        margin-bottom: 55px;
    }
    &__point {
        color: #000000;
        border: 2px solid #ff7661;
        border-radius: 50%;
        background-color: #fff;
        line-height: 40px;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        z-index: 10;
        &.hidden {
            opacity: 0;
            transition: all .5s;
            filter: blur(5px);
            transform: translateX(-100%);
        }
        &.show {
            filter: blur(0);
            opacity: 1;
            transform: translateX(0%);
        }
    }
    &__logo {
        margin-right: 40px;
    }
    &__subtitle {
        line-height: 1.35;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 14px;
    }
    &__text {
        font-weight: 300;
        font-size: 18px;
        line-height: 1.55;
        font-family: 'Roboto', sans-serif;
    }
    &__box {
        &.hidden {
            opacity: 0;
            transition: all .5s;
            filter: blur(5px);
            transform: translateX(-100%);
        }
        &.show {
            filter: blur(0);
            opacity: 1;
            transform: translateX(0%);
        }
    }
}


@media only screen and (max-width: 780px) {
    
    .info {
        &__el {
            flex-direction: column;
            text-align: center;
            align-items: center;
            width: 400px;
        }
        &__logo {
            margin: 0;
        }
        &__list {
            align-items: center;
        }
        &__point {
            margin: 0 0 1em 0;
        }
    }
}


@media only screen and (max-width: 600px) {
    
    .info {
        &__title {
            font-size: 35px;
        }
    }
}

@media only screen and (max-width: 400px) {
    
    .info {
        &__el {
            width: 310px;
        }
    }
}

@media only screen and (max-width: 281px) {
    .info {
        &__el {
            width: 250px;
        }
    }
}
</style>