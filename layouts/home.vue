<template>
    <Header @open="handleOpen" @close="handleClose"/>
    <slot />

    <div class="socialLinks">
        <a href="https://www.facebook.com/stikr" target="_blank" rel="noopener noreferrer">
            <Icon name="ri:facebook-fill" :color="color" height="24" width="auto"/>
        </a>
        <a href="https://www.instagram.com/stikr/" target="_blank" rel="noopener noreferrer">
            <Icon name="ri:instagram-line" :color="color" height="24" width="auto"/>
        </a>
    </div>

    <Footer />
</template>

<script setup lang="ts">
    const color = ref('black')
    if (process.client) {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? document.querySelector('.socialLinks')?.classList.add('header--scrolled') : document.querySelector('.socialLinks')?.classList.remove('header--scrolled');
        });
    }

    const handleOpen = () => {
        color.value = 'white'
    }

    const handleClose = () => {
        color.value = 'black'
    }

</script>

<style scoped>
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
        z-index: 50;
    }

    .header--scrolled{
        background: var(--whiteTransparent);
    }
</style>