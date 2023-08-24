<template>
    <Header @open="handleOpen" @close="handleClose"/>

    <div class="headerImage"></div>

    <slot />

    <div class="socialLinks menuOpen">
        <a href="https://www.facebook.com/stikr" target="_blank" rel="noopener noreferrer">
            <Icon name="ri:facebook-fill" :color="color" height="24" width="auto"/>
        </a>
        <a href="https://www.instagram.com/stikr2830/" target="_blank" rel="noopener noreferrer">
            <Icon name="ri:instagram-line" :color="color" height="24" width="auto"/>
        </a>
    </div>

    <Footer />
</template>

<script setup lang="ts">
    const color = ref('black')

    const handleOpen = () => {
        color.value = 'white';
        document.querySelector('.socialLinks')?.classList.remove('menuOpen');
    }

    const handleClose = () => {
        color.value = 'black'
        document.querySelector('.socialLinks')?.classList.add('menuOpen');
    }

    useHead({
        link: [
            {
                rel: 'preload',
                as: 'image',
                href: '/patterns/pattern--header.png'
            }    
        ]
    })
</script>

<style scoped>
    .headerImage{
        width: 100%;
        height: clamp(12rem, 30vh, 18.75rem);
        margin-bottom: 9.5rem;
        background-image: url('/patterns/pattern--header.png');
        /* background-image: url('~/assets/patterns/pattern--header.png'); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 0;
    }

    .socialLinks{
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        height: 1.5rem;
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        z-index: 250;
    }

    .menuOpen{
        background: var(--whiteTransparent);
    }
</style>