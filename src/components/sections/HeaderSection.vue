<script setup>
    // const blockID = document.getElementById('services')
    // blockID.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    // })


function scrollDown(blockID) {
    const $block = document.getElementById(blockID)
    $block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

</script>

<template>
    <div class="header__background"></div>
    <div class="burger__background"></div>
    <div class="burger">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="menu-items">
            <div class="menu-items-logo"><img src="../img/header-section/logo.jpg" alt=""></div>
            <div class="menu-items-title">Макияж и курсы макияжа</div>
            <div class="menu-items-text">
                <img id="call" src="https://static.tildacdn.com/lib/tildaicon/64313131-3136-4634-a137-653233376131/Layer_13.svg" alt="">
                <div class="menu-items-info">
                    <div class="menu-items-info-title">+7 775 757 66 77</div>
                    <div class="menu-items-info-subtitle">9.00–20.00</div>
                </div>
            </div>
            <div class="menu-items-text">
                <img id="loc" src="https://static.tildacdn.com/lib/tildaicon/39323534-6530-4531-a161-353364616636/education_location.svg" alt="">
                <div class="menu-items-info">
                    <div class="menu-items-info-title">Мәңгілік ел, 41/3</div>
                    <div class="menu-items-info-subtitle">Нур-Султан</div>
                </div>
            </div>
          </div>
        </div>
    </div>

    <header class="header">
            <div class="header__container">
                <div class="header__logo"><img src="../img/header-section/logo.jpg" alt=""></div>
                <div class="header__title">Макияж и курсы макияжа</div>
                <ul class="header__info">
                    <li class="header__item item">
                        <img id="phone-call" src="https://static.tildacdn.com/lib/tildaicon/64313131-3136-4634-a137-653233376131/Layer_13.svg" alt="">
                        <div class="item__info">
                            <div class="item__info-title">+7 775 757 66 77</div>
                            <div class="item__info-subtitle">9.00–20.00</div>
                        </div>
                    </li>
                    <li class="header__item item">
                        <img id="location" src="https://static.tildacdn.com/lib/tildaicon/39323534-6530-4531-a161-353364616636/education_location.svg" alt="">
                        <div class="item__info">
                            <div class="item__info-title">Мәңгілік ел, 41/3</div>
                            <div class="item__info-subtitle">Нур-Султан</div>
                        </div>
                    </li>
                </ul>
                <a href="#signup" @click.prevent="scrollDown('signup')" class="header__button button">Записаться</a>
            </div>
        </header>
</template>
<style lang="scss" scoped>



    
.burger {
    display: none;
    z-index: 1;
}


.menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-logo {
        width: 250px;
        height: 250px;
        margin: 0 0 4em 0;
        & img {
            width: 250px;
            height: 250px;
            filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.5));
        }
    }
    &-text {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        max-width: 700px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    &-title {
        font-weight: 700;
        font-size: 24px;
        font-family: 'Noto Serif', serif;
        margin: 0 0 3em 0;
    }
    &-info {
        margin: 0 0 0 .8em;
        height: 45px;   
        display: flex;
        flex-direction: column;
        font-size: 20px;
        gap: 2.5px;
        padding-top: 7.5px;
    }
}

#call {
    width: 75px;
    height: 75px;
}

#loc {
    width: 70px;
    height: 70px;
}
 .nav-container li {
  list-style: none;
}

 .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}

 .nav-container a:hover{
    font-weight: bolder;
}

.nav-container {
  display: flex;
  filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.5));
  height: 64px;
  position: fixed;
  background-color: #fff;
  width: 100%;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

 .menu-items {
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  background-color: #fff;
  
}

 .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.logo {
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 1.2rem;
  color: #0e2431;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}

.header__background {
    background-color: #fff;
    min-height: 80px;
}
.header {
    z-index: 1;
    filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.5));
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    min-height: 80px;
    &__title {
        font-weight: 700;
        font-size: 16px;
    }
    &__container {
        min-height: 80px;
        display: flex;
        align-items: center;
        font-family: 'Noto Serif', serif;
    }
    &__logo {
        width: 70px;
        height: 70px;
        margin: 0 3em 0 0;
        & img {            
            width: 70px;
            height: 70px;
        }
    }
    &__info {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        max-width: 700px;
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        margin: 0 4em 0 0;
        gap: 3em;
    }
    &__button {
        background-color: #ff7661;
        height: 45px;
        font-size: 14px;
        padding: 0 30px;
        line-height: 1;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        transition: .5s;
        &:hover {
            background-color: #0d0d0d;
            transition: .5s;
        }
    }
}


.item {
    display: flex;
    align-items: center;
    line-height: 1.2;
    &__info {
        margin: 0 0 0 .8em;
        height: 45px;   
        display: flex;
        flex-direction: column;
        gap: 2.5px;
        padding-top: 2.5px;
    }
}

#phone-call {
    width: 45px;
    height: 45px;
}

#location {
    width: 40px;
    height: 40px;
}

@media only screen and (max-width: 964px) {
	.header {
        display: none;
    }
    .header__background {
        display: none;
    }
    .burger {
        display: block;
    }
}

</style>