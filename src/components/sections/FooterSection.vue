<script setup>

</script>


<template>
<footer class="footer">
            <div class="footer__container">
                <div class="footer__text">Мәңгілік ел 41/3, Нур-Султан</div>
                <div class="footer__text">Номер телефона: +7 775 757 66 77</div>
                <div class="footer__text">Отвечаю с: 9.00–20.00</div>
                <div class="footer__title">© 2022 Айгерим Такаева. Все права защищены</div>
            </div>
        </footer>
</template>


<style lang="scss" scoped>
.footer {
    min-height: 200px;
    background-color: #0d0d0d;
    &__container {
        padding-left: 3em;
        min-height: 200px;
        color: #9d9d9d;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    &__title {
        margin: 1em 0 0 0;
    }
    &__text {
        width: 460px;
        margin: 0 0 .5em 0;
    }
    
}


@media only screen and (max-width: 600px) {
    .footer__container {
        font-size: 12px;
        padding-left: 1em;
    }
}

@media only screen and (max-width: 500px) {
    .footer {
        &__text {
            width: 300px;
        }
    }
}
</style>