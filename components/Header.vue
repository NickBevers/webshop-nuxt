<template>
    <header>
        <nav class="navigation">
            <nuxt-link to="/"><nuxt-img src="/images/stikr--logo.svg" alt="stikr logo" height="100" sizes="100vw" /></nuxt-link>
            <!-- <nuxt-link to="/"><img src="~/assets/images/stikr--logo.svg" alt="stikr logo" height="100" /></nuxt-link> -->
            <div class="icon__container" @click="toggleMenu" v-if="!menuOpen">
                <Icon name="material-symbols:menu" color="black" size="32" class="navigation__menuIcon"/>
            </div>
            <div class="icon__container" @click="toggleMenu" v-else>
                <Icon name="material-symbols:close" color="white" size="32" class="navigation__menuIcon"/>
            </div>
        </nav>

        <section class="menu" :class="menuOpen ?'active' :''">
            <div class="menu__items">
                <div class="menu__item" @click="handleNavigation"><nuxt-link to="/">Home</nuxt-link></div>
                <div class="menu__item" @click="handleNavigation"><nuxt-link to="/services">Services</nuxt-link></div>
                <div class="menu__item" @click="handleNavigation"><nuxt-link to="/portfolio">Portfolio</nuxt-link></div>
                <div class="menu__item" @click="handleNavigation"><nuxt-link to="/jobs">Jobs</nuxt-link></div>
                <div class="menu__item" @click="handleNavigation"><nuxt-link to="/contact">Contact</nuxt-link></div>
            </div>
        </section>
    </header>
</template>

<script setup lang="ts">
    const emit = defineEmits(['open', 'close']);
    let menuOpen: Ref<Boolean> = ref(false);

    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
        menuOpen.value ? emit('open') : emit('close');
    }

    const handleNavigation = () => {
        menuOpen.value = false;
        emit('close');
    }

</script>

<style scoped lang="css">
    .navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        height: 100px;
        margin-top: 1rem;
        padding: 0 4rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        z-index: 1000;
    }

    .navigation__menuIcon{
        cursor: pointer;
    }

    .menu{
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-image: url('/assets/patterns/pattern--color.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 200;
        font-family: var(--fontFamilyTitle);
        font-size: 3rem;
        visibility: hidden;
    }

    .active{
        visibility: visible;
        opacity: 1;
    }

    .menu__items{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        width: clamp(20rem, 100%, 1366px);
        margin: 0 auto;
        padding-top: 15rem;
        color: var(--white);
    }

    .menu__item{
        transition: transform 0.3s ease-in-out;
        margin-bottom: 0.5rem;
    }

    .menu__item:hover{
        transform: translateX(1rem);
    }

</style>