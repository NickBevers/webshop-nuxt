<template>
    <div class="home__container">
        <main class="landing">
            <nuxt-img preload src="/images/stikr--slogan.svg" alt="stikr Slogan" class="landing__slogan" sizes="100vw" />
            <!-- <img src="~/assets/images/stikr--slogan.svg" alt="stikr Slogan" class="landing__slogan" /> -->
        </main>

        <section class="introduction">
            <div class="intro__textContent">
                <h1 class="intro__title">Wie zijn wij?</h1>
                <p class="intro__textBody">Van autobelettering tot beursstanden, van bedrukt textiel tot interieuroplossingen: dankzij ons
                    uitgebreide gamma vind je alles wat je nodig hebt op één adres.
                    Drukdrukdruk? Niet bij ons: wij nemen de tijd voor <span class="bold">persoonlijk overleg</span>. We luisteren naar jouw wensen,
                    geven je advies en zo komen we samen tot het beste resultaat.
                    <br><br>
                    We staan garant voor <span class="bold">kwaliteit</span> en gaan steeds met de <span class="bold">grootste zorg</span> aan de slag. Voor elk budget vinden
                    we een oplossing - wij drukken ook de prijs.
                    <br><br>
                    Wij zijn een <span class="bold">jong, creatief bedrijf</span> en verrassen je graag met frisse ideeën.
                    Zit je met een vraag of wil je een vrijblijvende offerte?
                    Mail of bel ons en wij maken er werk van!</p>
            </div>

            <div class="intro__stikrLogo">
                <nuxt-img preload src="/images/stikr--logo.svg" alt="stikr logo" class="stikrLogo" sizes="100vw"/>
                <!-- <img src="~/assets/images/stikr--logo.svg" alt="stikr logo" class="stikrLogo"/> -->
            </div>
        </section>

        <section class="opinion__slider">
            <div class="opinion__container">
                <div class="opinion" v-for="op in opinions">
                    <p class="opinion__text">“{{ op.opinion }}”</p>
                    <nuxt-img preload src="/images/stikr--logo.svg" width="55px" alt="stikr logo" class="opinion__logo" sizes="100vw"/>
                    <!-- <img src="~/assets/images/stikr--logo.svg" width="55px" alt="stikr logo" class="opinion__logo"/> -->
                </div>
            </div>
        </section>

        <section class="projects">
            <h2>Onze projecten</h2>
            <div class="projectGrid">
                <div class="project" v-for="project in projects" :key="project.id">
                    <nuxt-img preload :src="project.image" :alt="project.title" class="project__image" height="400px"/>
                    <!-- <img :src="project.image" :alt="project.title" class="project__image" height="400px"/> -->
                    <div class="project__data">
                        <p class="project__title">{{ project.title }}</p>
                        <nuxt-link :to="{name: 'projects-id', params: {id: 'stikrWebsite'}}" class="project__link">Bekijk project</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="customers">
            <h2>Onze klanten</h2>
            <div class="customerSlider">
                <nuxt-img preload src="/images/customers/aclagro.png" alt="Aclargo logo" class="customerSlider__logo"/>
                <nuxt-img preload src="/images/customers/deMeeuw.svg" alt="De Meeuw logo" class="customerSlider__logo"/>
                <nuxt-img preload src="/images/customers/voka.svg" alt="VOKA logo" class="customerSlider__logo"/>
                <nuxt-img preload src="/images/customers/bergeratRent.svg" alt="Bergerat Rent logo" class="customerSlider__logo"/>
                <nuxt-img preload src="/images/customers/beyers.png" alt="Beyers logo" class="customerSlider__logo logo--beyers"/>
                <nuxt-img preload src="/images/customers/bergeratMonnoyeur.png" alt="Bergerat Monnoyeur logo" class="customerSlider__logo"/>
                <!-- <img src="~/assets/images/customers/aclagro.png" alt="Aclargo logo" class="customerSlider__logo" /> -->
                <!-- <img src="~/assets/images/customers/deMeeuw.svg" alt="De Meeuw logo" class="customerSlider__logo" /> -->
                <!-- <img src="~/assets/images/customers/voka.svg" alt="VOKA logo" class="customerSlider__logo" /> -->
                <!-- <img src="~/assets/images/customers/bergeratRent.svg" alt="Bergerat Rent logo" class="customerSlider__logo" /> -->
                <!-- <img src="~/assets/images/customers/beyers.png" alt="Beyers logo" class="customerSlider__logo" /> -->
                <!-- <img src="~/assets/images/customers/bergeratMonnoyeur.png" alt="Bergerat Monnoyeur logo" class="customerSlider__logo" /> -->
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    let imageColor = '/patterns/project--color.png';
    let imageWhite = '/patterns/project--white.png';
    // import imageColor from '../assets/patterns/project--color.png';
    // import imageWhite from '../assets/patterns/project--white.png';

    definePageMeta({
        title: 'Home',
        description: 'Stikr is een jong, creatief bedrijf dat je verrast met frisse ideeën. Van autobelettering tot beursstanden, van bedrukt textiel tot interieuroplossingen: dankzij ons uitgebreide gamma vind je alles wat je nodig hebt op één adres.',
        layout: 'home'
    });

    const opinions = [
        {
            opinion: 'Super vlotte communicatie, perfecte klantenservice, snelle en zeer degelijke bedrukking.',
            company: 'Stikr'
        },
        {
            opinion: 'Op een uur tijd een afspraak gemaakt, meteen mogen langs gaan en de stickers al ineens mee naar huis kunnen nemen.',
            company: 'Stikr'
        },
        {
            opinion: 'Goede snelle service en zeer vriendelijk ontvangst.',
            company: 'Stikr'
        }
    ];

    const projects = [
        {
            title: "Autobelettering",
            tags: ["Autobelettering", "Voertuigen", "Autostickers"],
            image: imageColor,
            id: 1
        },
        {
            title: "Gevelreclame",
            tags: ["Gevelreclame", "Gevelletters", "Gevelborden"],
            image: imageWhite,
            id: 2
        },
        {
            title: "Raambelettering",
            tags: ["Raambelettering", "Raamstickers", "Raamfolie"],
            image: imageColor,
            id: 3
        },
        {
            title: "Textielbedrukking",
            tags: ["Textielbedrukking", "T-shirts", "Sweaters"],
            image: imageWhite,
            id: 4
        },
        {
            title: "Beursstanden",
            tags: ["Beursstanden", "Beurswanden", "Beursmateriaal"],
            image: imageColor,
            id: 5
        },
        {
            title: "Interieur",
            tags: ["Interieur", "Interieurstickers", "Interieurprints"],
            image: imageWhite,
            id: 6
        },
        {
            title: "Spandoeken",
            tags: ["Spandoeken", "Vlaggen", "Banners"],
            image: imageColor,
            id: 7
        },
        {
            title: "Reclameborden",
            tags: ["Reclameborden", "Werfborden", "V-borden"],
            image: imageWhite,
            id: 8
        },
        {
            title: "Stickers",
            tags: ["Stickers", "Vinylstickers", "Muurstickers"],
            image: imageColor,
            id: 9
        },
    ];
</script>


<style scoped>
    .home__container {
        min-height: 100vh;
        height: fit-content;
        /* margin-top: calc(-100px - 1rem); */
    }

    .landing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: clamp(80vw, 100%, 100vw);
        height: 100vh;
        background-image: url('/patterns/pattern--white.png');
        /* background-image: url('~/assets/patterns/pattern--white.png'); */
        background-size: cover;
        background-repeat: no-repeat;
    }

    .landing__slogan {
        width: clamp(10rem, 100%, 30rem);
    }

    .introduction {
        height: 100%;
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .intro__textContent {
        width: clamp(280px, 100%, 600px);
    }

    .intro__textBody{
        margin-top: 3rem;
    }

    .intro__stikrLogo{
        width: clamp(10rem, 100%, 400px);
        height: clamp(10rem, 100%, 350px);
        max-height: 350px;
    }

    .stikrLogo{
        width: 100%;
        height: 100%;
        max-height: 350px;
    }

    .opinion__slider{
        width: 100%;
        height: 400px;
        background-image: url('/patterns/pattern--light.png');
        /* background-image: url('~/assets/patterns/pattern--light.png'); */
        background-repeat: no-repeat;
        background-size: cover;
    }

    .opinion__container{
        width: 100%;
        height: 400px;
        margin: 0 auto;
        padding: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

    .opinion{
        background-color: var(--whiteTransparent);
        width: clamp(20rem, 100%, 500px);
        height: 150px;
        border-radius: 8px;
        backdrop-filter: blur(.5rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .opinion p{
        color: var(--black);
        margin: 0 3rem;
    }

    .opinion__logo{
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0.5rem;
    }

    .projectGrid{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, minmax(20rem, 1fr));
        grid-template-rows: repeat(3, minmax(20rem, 1fr));
        row-gap: 5.25rem;
    }

    .project{
        width: clamp(20rem, 100%, 400px);
        height: 400px;
        position: relative;
        overflow: hidden;
        position: relative;
        place-self: center stretch;
    }

    .project:nth-of-type(3n-1){
        justify-self: center;
    }

    .project:nth-of-type(3n){
        justify-self: end;
    }

    .project__image{
        object-fit: contain;
        transition: transform .3s ease-in-out;
    }

    .project__data{
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

    .project:hover .project__image{
        transform: scale(1.1);
    }

    .project:hover .project__data{
        opacity: 1;
        color: var(--black);
    }

    .project__title{
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

    .customerSlider{
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        overflow-x: hidden;
    }

    .customerSlider__logo{
        width: auto;
        height: 3rem;
        max-width: 100%;
        aspect-ratio: auto;
    }

    .logo--beyers{
        height: 4rem;
    }

</style>