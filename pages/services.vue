<template>
    <section class="service__container">
        <h1>Onze diensten</h1>
        <div class="service__overview">
            <div class="service">
                <nuxt-img preload src="/images/services/GraphicDesign.svg" alt="Graphic Design" class="service__image image--design" sizes="100vw"/>
                <!-- <img src="~/assets/images/services/GraphicDesign.svg" alt="Graphic Design" class="service__image image--design" /> -->
                <nuxt-link :to="{ path: '/services', hash: '#design' }" class="service__link link--design">Grafisch ontwerp</nuxt-link>
            </div>

            <div class="service">
                <nuxt-img preload src="/images/services/Lettering.svg" alt="Graphic Design"  class="service__image image--lettering" sizes="100vw"/>
                <!-- <img src="~/assets/images/services/Lettering.svg" alt="Graphic Design"  class="service__image image--lettering" /> -->
                <nuxt-link :to="{ path: '/services', hash: '#lettering'}" class="service__link link--lettering">Belettering</nuxt-link>
            </div>

            <div class="service">
                <nuxt-img preload src="/images/services/TextilePrint.svg" alt="Graphic Design" class="service__image image--textile" sizes="100vw"/>
                <!-- <img src="~/assets/images/services/TextilePrint.svg" alt="Graphic Design" class="service__image image--textile" /> -->
                <nuxt-link :to="{ path: '/services', hash: '#textile'}" class="service__link link--textile">Textiel</nuxt-link>
            </div>

            <div class="service">
                <nuxt-img preload src="/images/services/Events.svg" alt="Graphic Design"  class="service__image image--events" sizes="100vw"/>
                <!-- <img src="~/assets/images/services/Events.svg" alt="Graphic Design"  class="service__image image--events" /> -->
                <nuxt-link :to="{ path: '/services', hash: '#events'}" class="service__link link--events">Events & beurzen</nuxt-link>
            </div>
        </div>

        <div class="service__detail service--design" id="design">
            <div class="detail__container">
                <div class="service__textContent">
                    <h3>Grafisch ontwerp</h3>
                    <p class="service__description">
                        Met een herkenbaar logo toon je in één oogopslag waar je bedrijf, school of vereniging voor staat.<br><br>
                        <span class="bold purple">Is je logo wat verouderd?</span><br>
                        Wij upgraden het graag voor jou! <br><br>
        
                        <span class="bold purple">Begin je liever van nul?</span><br>
                        Wij ontwerpen een logo dat jouw imago uitstraalt en het juiste doelpubliek aanspreekt. <br><br>
        
                        Als je dat wil, tekenen we op basis van dat logo ook een <span class="bold">complete huisstijl</span> uit en voorzien we je van <span class="bold">kwalitatief drukwerk.</span>
                    </p>
                </div>
                <div class="service__detailImage">
                    <nuxt-img preload src="/images/services/GraphicDesign.svg" alt="Graphic Design" class="detailImage image--design" sizes="100vw"/>
                    <!-- <img src="~/assets/images/services/GraphicDesign.svg" alt="Graphic Design" class="detailImage image--design" /> -->
                </div>
            </div>
            <div class="projects">
                <nuxt-link to="/projects/stikerWebsite" class="project" v-for="project in projects">
                    <nuxt-img preload :src="project.image" :alt="project.alt" class="project__image" sizes="100vw"/>
                    <!-- <img :src="project.image" :alt="project.alt" class="project__image" /> -->
                    <div class="project__info">
                        <h3 class="project__title">{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>

        <div class="service__detail service--lettering" id="lettering">
            <div class="detail__container">
                <div class="service__textContent">
                    <h3>Belettering</h3>
                    <p class="service__description">
                        <span class="bold purple">Opvallen op de weg?</span> 
                        Wij kleden wagens en trucks aan met creatieve en kwalitatieve belettering. <br><br>
                        Dankzij onze raamstickers passeert niemand zonder dat ze jouw bedrijf hebben gezien. <br><br>
                        Ook interieurstickers kunnen je kantoor of winkel karakter geven. <br> Wij maken een ontwerp op maat.
                    </p>
                </div>
                <div class="service__detailImage">
                    <nuxt-img preload src="/images/services/Lettering.svg" alt="Lettering and car wrapping" class="detailImage image--lettering" sizes="100vw"/>
                    <!-- <img src="~/assets/images/services/Lettering.svg" alt="Lettering and car wrapping" class="detailImage image--lettering" /> -->
                </div>
            </div>
            <div class="projects">
                <nuxt-link to="/projects/stikerWebsite" class="project" v-for="project in projects">
                    <nuxt-img preload :src="project.image" :alt="project.alt" class="project__image" sizes="100vw"/>
                    <!-- <img :src="project.image" :alt="project.alt" class="project__image" /> -->
                    <div class="project__info">
                        <h3 class="project__title">{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>

        <div class="service__detail service--textile" id="textile">
            <div class="detail__container">
                <div class="service__textContent">
                    <h3>Textiel</h3>
                    <p class="service__description">
                        Als erkend verdeler van Fristads en CAT staan we garant voor werkkledij van hoog niveau. <br><br>
                        Maar ook fluohesjes en labojassen voor scholen, T-shirts of hoodies voor jeugdbewegingen, <br>
                        kwalitatieve horeca-outfits of sportkledij: alle soorten textiel geven wij een persoonlijke toets. <br><br>

                        We zetten er je logo, naam of een eigen ontwerp op. <br><br>

                        <span class="bold purple">Leef je gerust uit:</span> <br>
                        We drukken niet alleen in alle basiskleuren, maar ook in fluo, metalic of zelfs "glow in the dark".
                    </p>
                </div>
                <div class="service__detailImage">
                    <nuxt-img preload src="/images/services/TextilePrint.svg" alt="Textile and printing" class="detailImage image--textile" sizes="100vw"/>
                    <!-- <img src="~/assets/images/services/TextilePrint.svg" alt="Textile and printing" class="detailImage image--textile" /> -->
                </div>
            </div>
            <div class="projects projects--design">
                <nuxt-link to="/projects/stikerWebsite" class="project" v-for="project in projects">
                    <nuxt-img preload :src="project.image" :alt="project.alt" class="project__image" sizes="100vw"/>
                    <!-- <img :src="project.image" :alt="project.alt" class="project__image" /> -->
                    <div class="project__info">
                        <h3 class="project__title">{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>

        <div class="service__detail service--events" id="events">
            <div class="detail__container">
                <div class="service__textContent">
                    <h3>Events & beurzen</h3>
                    <p class="service__description">
                        Zorg ervoor dat jouw stand de aandacht trekt op elke beurs of evenement. <br><br>
                        Strandvlaggen, gepersonaliseerd meubilair, banners en bedrukte panelen in PVC of dibond: voor elke blikvanger hebben wij de technische knowhow in huis. <br><br>
                        Voor events groot én klein kunnen wij jou een helpende hand bieden of een volledig concept uitwerken.
                    </p>
                </div>
                <div class="service__detailImage">
                    <nuxt-img preload src="/images/services/Events.svg" alt="Events" class="detailImage image--events" sizes="100vw"/>
                    <!-- <img src="~/assets/images/services/Events.svg" alt="Events" class="detailImage image--events" /> -->
                </div>
            </div>
            <div class="projects">
                <nuxt-link to="/projects/stikerWebsite" class="project" v-for="project in projects">
                    <nuxt-img preload :src="project.image" :alt="project.alt" class="project__image" sizes="100vw"/>
                    <!-- <img :src="project.image" :alt="project.alt" class="project__image" /> -->
                    <div class="project__info">
                        <h3 class="project__title">{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>

    <div class="externalLinks">
        <section class="links__container">
            <div class="externalLink">
                <h3>Textiel</h3>
                <p>
                    Ontdek ons ruim aanbod aan t-shirts, hoodies, horeca-outfits en allerhande textiel. <br><br>
                    Van kindermaten tot volwassenmaten, bij ons vind je alles wat je zoekt!
                </p>

                <a href="https://shop.stikr.be" class="link link--webshop">Onze webshop</a>
            </div>

            <div class="externalLink">
                <h3>Fristads catalogus</h3>
                <p>
                    Als officiële verdeler van Fritsads workwear bieden wij onze professionele klanten een brede waaier aan kwalitatieve werkkledij aan. <br><br>
                    Ontdek hieronder de Fristads catalogus.
                </p>

                <a href="https://catalog.fristads.com/benelux/nl-catalogus-fristads-2022/" class="link link--fristads">Fristads catalogus</a>
            </div>

            <div class="externalLink">
                <h3>Cat catalogus</h3>
                <p>
                    Professionele werkkledij nodig of gewoon fan van het merk Cat? <br><br>
                    Wij helpen je graag verder en voorzien de kledij indien gewenst van een mooie en kwalitatieve opdruk.
                </p>

                <a href="https://shopcaterpillar.com/" class="link link--cat">Cat catalogus</a>
            </div>
        </section>
    </div>

    <section class="portfolio">
        <div>
            <h2>Ons portfolio</h2>
            <p>
                Benieuwd hoe we het uihangen bij Stikr? <br>
                Bekijk hieronder ons portfolio en ontdek hoe wij onze projecten realiseren.
            </p>
            <nuxt-link to="/portfolio" class="link link--portfolio">Portfolio</nuxt-link>
        </div>
        <div class="carousel__container">
            <el-carousel trigger="click" height="15rem">
                <el-carousel-item v-for="item in portfolioItems" :key="item.id">
                    <nuxt-img preload :src="item.image" :alt="item.title" class="carousel__item__image" sizes="100vw"/>
                    <!-- <img :src="item.image" :alt="item.title" class="carousel__item__image"/> -->
                </el-carousel-item>
            </el-carousel>
        </div>
    </section>
</template>

<script setup lang="ts">
    let imageColor = '/patterns/project--color.png';
    let imageWhite = '/patterns/project--white.png';
    // import imageColor from '../assets/patterns/project--color.png';
    // import imageWhite from '../assets/patterns/project--white.png';

    let projects = [
        {
            image: imageColor,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
        {
            image: imageWhite,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
        {
            image: imageColor,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
        {
            image: imageWhite,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
    ];

    let portfolioItems = [
        {
            id: 1,
            image: imageColor,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
        {
            id: 2,
            image: imageWhite,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
        {
            id: 3,
            image: imageColor,
            alt: 'Project image',
            title: 'Titel',
            description: 'project grafisch ontwerp'
        },
    ];
</script>

<style scoped>

    .service__overview {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 9.5rem;
    }

    .service {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 1rem;
        background-color: var(--color-primary);
        color: var(--color-white);
        transition: all 0.3s ease-in-out;
        max-width: 15.625rem;
        max-height: 18.75rem;
        height: 20rem;
        box-sizing: border-box;
    }

    /* .service:hover {
        transform: scale(1.1);
    } */

    .service__link {
        text-decoration: none;
        color: var(--color-white);
        font-family: var(--fontFamilyTitle);
        background: var(--gradientRedPurple);
        color: var(--white);
        font-size: 1.25rem;
        width: 10rem;
        height: 2.5rem;
        display: grid;
        place-items: center;
    }

    .service__image {
        width: clamp(5rem, 20vw, 15.625rem);
    }

    .service__detail:nth-of-type(2n+1) .detail__container {
        flex-direction: row-reverse;
    }

    .service__detail:nth-of-type(2n+1) .projects {
        flex-direction: row-reverse;
    }

    .detail__container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        height: 100%;
    }

    .service__textContent{
        max-width: 50%;
    }

    .projects{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 5rem;
    }

    .project{
        width: clamp(8rem, 100%, 17.5rem);
        height: 12.5rem;
        position: relative;
        overflow: hidden;
    }

    .project__image{
        width: 100%;
        height: 100%;
    }

    .service__detailImage{
        height: 20rem;
    }

    .detailImage{
        width: 100%;
        height: 90%;
    }

    .project__info{
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
        justify-content: center;
        align-items: center;
        transition: opacity .3s ease-in-out;
        opacity: 0;
        font-family: var(--fontFamilyBody);
    }

    .project:hover .project__info{
        opacity: 1;
        color: var(--black);
    }

    .project__title{
        font-family: var(--fontFamilyTitle);
        color: var(--black);
        font-size: 2.25rem;
        margin-bottom: 2rem;
    }

    .project:nth-of-type(odd) .project__info > *{
        color: var(--white);
    }

    .externalLinks{
        background-image: url('/patterns/pattern--lightLarge.png');
        /* background-image: url('~/assets/patterns/pattern--lightLarge.png'); */
        background-repeat: no-repeat;
        background-size: cover;
    }

    .links__container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .externalLink{
        background: var(--whiteTransparent);
        width: 100%;
        height: 37.5rem;
        margin: 5rem 0;
        padding: 5rem;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }

    .externalLink p{
        color: var(--black);
        height: 100%;
    }

    .link{
        text-decoration: none;
        color: var(--color-white);
        background: var(--gradientRedPurple);
        width: 15rem;
        height: 3.75rem;
        display: flex;
        justify-content: center;
        margin-top: 4rem;
        font-family: var(--fontFamilyTitle);
        color: var(--white);
        font-size: 1.75rem;
        padding: 1rem 0;
        box-sizing: border-box;
    }

    .link:hover{
        color: var(--offWhite);
    }

    .portfolio{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .carousel__container{
        width: 30%;
    }

    .carousel__item__image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>