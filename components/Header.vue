<template>
    <header>
        <nav class="navigation">
            <nuxt-img src="/images/stikr--logo.svg" alt="stikr logo" height="100" />
            <div class="icon__container" @click="toggleMenu" v-if="!menuOpen">
                <Icon name="material-symbols:menu" color="black" size="clamp(1.5rem, 2vw, 2rem)" class="navigation__menuIcon"/>
            </div>
            <div class="icon__container" @click="toggleMenu" v-else>
                <Icon name="material-symbols:close" color="white" size="clamp(1.5rem, 2vw, 2rem)" class="navigation__menuIcon"/>
            </div>
        </nav>

        <section class="menu" :class="menuOpen ?'active' :''">
            <div class="menu__items">
                <div class="menu__item" @click="menuOpen = false"><nuxt-link to="/">Home</nuxt-link></div>
                <div class="menu__item" @click="menuOpen = false"><nuxt-link to="/services">Services</nuxt-link></div>
                <div class="menu__item" @click="menuOpen = false"><nuxt-link to="/portfolio">Portfolio</nuxt-link></div>
                <div class="menu__item" @click="menuOpen = false"><nuxt-link to="/jobs">Jobs</nuxt-link></div>
                <div class="menu__item" @click="menuOpen = false"><nuxt-link to="/contact">Contact</nuxt-link></div>
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
        z-index: 1;
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

    .menu__item:hover{
        color: var(--offWhite);
    }

</style>