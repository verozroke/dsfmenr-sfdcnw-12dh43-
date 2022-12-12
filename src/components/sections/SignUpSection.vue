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
    let hiddenTitleElements = document.querySelectorAll('.signup__title.hidden')
    let hiddenSubtitleElements = document.querySelectorAll('.signup__subtitle.hidden')
    let hiddenButtonElements = document.querySelectorAll('.signup__button.hidden')
    let hiddenElements = [...hiddenTitleElements, ...hiddenSubtitleElements, ...hiddenButtonElements]
    hiddenElements.forEach(hiddenServiceElement => {
        observer.observe(hiddenServiceElement)
    })
}, 0)
</script>


<template>
    <section class="signup" id="signup" ref="signup">
            <div class="signup__container">
                <div class="signup__title  hidden">Свяжитесь с нами</div>
                <div class="signup__subtitle  hidden">Оставьте сообщение в Whatsapp, и мы ответим вам для подтверждения деталей записи</div>
                <a href="https://wa.me/message/VONWEPHPLJ6FN1" target="_blank" class="signup__button  hidden">Перейти в Whatsapp</a>
            </div>
        </section>
</template>

<style lang="scss" scoped>
.signup {
    min-height: 570px; 
    background-image: url(https://static.tildacdn.com/tild6131-6663-4634-b264-633431383738/2__1.png);
    &__container {
        min-height: 570px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 5em;
    }
    &__title {
        font-size: 48px;
        line-height: 1.23;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;

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
    &__subtitle {
        font-family: 'Roboto', sans-serif;
        color: #000000;
        max-width: 600px;
        text-align: center;
        margin: 24px 0 74px 0;
        font-size: 24px;
        line-height: 1.50;
        font-weight: 300;
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
    &__button {
        text-align: center;
        width: 16em;
        background-color: #37db54;
        padding: 1em 3em;
        border-radius: 1em;
        color: #fff;
        transition: .4s;
        filter: drop-shadow(1em .5em .5em rgba(0, 0, 0, 0.33));
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
            filter: drop-shadow(1em .5em .5em rgba(0, 0, 0, 0.33));
        }
        &:visited {
            color: #fff;
            transition: .4s;
        }
        &:hover {
            transition: .4s;
            filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.5));
        }
    }
}


@media only screen and (max-width: 600px) {
    .signup {
        &__title {
            font-size: 35px;
        }
        &__subtitle {
            max-width: 350px;
        }
    }
}

@media only screen and (max-width: 281px) {
    .signup {
        &__subtitle {
            max-width: 250px;
        }
        &__button {
            font-size: 15px;
        }
    }
}

</style>