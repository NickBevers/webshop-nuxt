<template>
    <section class="portfolio__container">
        <h2>Portfolio</h2>
        <div class="portfolio__items__container">
            <div class="portfolio__item" v-for="project in projects" :key="project.id">
                <img :src="project.image" alt="project.title" class="project__image"/>
                <div class="portfolio__item__content">
                    <p class="portfolio__item__link">{{ project.title }}</p>
                    <nuxt-link :to="{name: 'projects-id', params: {id: project.id}}" class="project__link">Bekijk project</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import imageColor from '../assets/patterns/project--color.png';
    import imageWhite from '../assets/patterns/project--white.png';

    const projects = [
        {
            title: "Autobelettering",
            tags: ["Autobelettering", "Voertuigen", "Autostickers"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Gevelreclame",
            tags: ["Gevelreclame", "Gevelletters", "Gevelborden"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Raambelettering",
            tags: ["Raambelettering", "Raamstickers", "Raamfolie"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Textielbedrukking",
            tags: ["Textielbedrukking", "T-shirts", "Sweaters"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Beursstanden",
            tags: ["Beursstanden", "Beurswanden", "Beursmateriaal"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Interieur",
            tags: ["Interieur", "Interieurstickers", "Interieurprints"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Spandoeken",
            tags: ["Spandoeken", "Vlaggen", "Banners"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Reclameborden",
            tags: ["Reclameborden", "Werfborden", "V-borden"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Stickers",
            tags: ["Stickers", "Vinylstickers", "Muurstickers"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Gevelreclame",
            tags: ["Gevelreclame", "Gevelletters", "Gevelborden"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Raambelettering",
            tags: ["Raambelettering", "Raamstickers", "Raamfolie"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Textielbedrukking",
            tags: ["Textielbedrukking", "T-shirts", "Sweaters"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Beursstanden",
            tags: ["Beursstanden", "Beurswanden", "Beursmateriaal"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Interieur",
            tags: ["Interieur", "Interieurstickers", "Interieurprints"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Spandoeken",
            tags: ["Spandoeken", "Vlaggen", "Banners"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Reclameborden",
            tags: ["Reclameborden", "Werfborden", "V-borden"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
        {
            title: "Stickers",
            tags: ["Stickers", "Vinylstickers", "Muurstickers"],
            image: imageColor,
            id: 'stikrWebsite'
        },
        {
            title: "Autobelettering",
            tags: ["Autobelettering", "Voertuigen", "Autostickers"],
            image: imageWhite,
            id: 'stikrWebsite'
        },
    ];
</script>

<style scoped>
    .portfolio__items__container{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, minmax(20rem, 1fr));
        grid-template-rows: repeat(3, minmax(20rem, 1fr));
        row-gap: 5.25rem;
    }

    .portfolio__item{
        width: clamp(20rem, 100%, 400px);
        height: 400px;
        position: relative;
        overflow: hidden;
        position: relative;
        place-self: center stretch;
        cursor: pointer;
    }

    .portfolio__item:nth-of-type(3n-1){
        justify-self: center;
    }

    .portfolio__item:nth-of-type(3n){
        justify-self: end;
    }

    .project__image{
        object-fit: contain;
        transition: transform .3s ease-in-out;
    }

    .portfolio__item__content{
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--whiteTransparent);
        backdrop-filter: blur(.5rem);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: opacity .3s ease-in-out;
        opacity: 0;
        font-family: var(--fontFamilyBody);
    }

    .portfolio__item:hover .project__image{
        transform: scale(1.1);
    }

    .portfolio__item:hover .portfolio__item__content{
        opacity: 1;
        color: var(--black);
    }

    .portfolio__item__link{
        font-family: var(--fontFamilyTitle);
        color: var(--black);
        font-size: 2.25rem;
    }

    .project__link{
        padding: 0.5rem 0;
        text-align: center;
        border-radius: 3px;
        background: var(--gradientRedPurple);
        color: var(--white);
        width: clamp(6rem, 100%, 10rem);
        transition: font-size .3s ease-in-out;
    }

    .project__link:hover{
        font-size: 1.05rem;
    }
</style>