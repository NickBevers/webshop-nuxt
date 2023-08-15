<template>
    <footer>
        <div class="footer__content">
            <div class="footer__content__logo">
                <nuxt-img src="/images/character--white.svg" alt="stikr logo" height="250" />
            </div>
            <div class="footer__content__links">
                <div class="contactInformation">
                    <h4>Contact Information</h4>
                    <p>August Van Landeghemplein 3, <br>2830 Willebroek</p>
                    <br><br>
                    <p>
                        <a href="mailto:info@stikr.be" class="mail">info@stikr.be</a><br>
                        +32 32 84 56 76<br>
                        BE0688 896 869
                    </p>
                </div>

                <div class="siteMap">
                    <h4>Site Map</h4>
                    <p>
                        <nuxt-link to="/">Home</nuxt-link><br>
                        <nuxt-link to="/services">Onze diensten</nuxt-link><br>
                        <nuxt-link to="/portfolio">Portfolio</nuxt-link><br>
                        <nuxt-link to="/contact">Contact</nuxt-link><br>
                        <nuxt-link to="/privacy">Privacy policy</nuxt-link><br>
                        <nuxt-link to="/terms-and-conditions">Algemene voorwaarden</nuxt-link><br>
                        <nuxt-link to="/cookies">Cookie instellingen</nuxt-link><br>
                    </p>
                </div>

                <div class="socials">
                    <h4>Social media</h4>
                    <p>
                        <a href="https://www.facebook.com/stikr.be" target="_blank">Facebook</a><br>
                        <a href="https://www.instagram.com/stikr.be" target="_blank">Instagram</a><br>
                        <a href="https://www.linkedin.com/company/stikr-be" target="_blank">LinkedIn</a><br>
                    </p>
                </div>

                <div class="footer__buttons">
                    <nuxt-link to="/contact" class="button button--white">Vraag offerte aan</nuxt-link>
                    <nuxt-link to="/contact" class="button button--white">Contacteer ons</nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
    footer{
        height: 450px;
        background-image: url('~/assets/patterns/footer__pattern.png');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 0 12.5rem;
        color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .footer__content__logo{
        max-height: 250px;
    }

    footer p{
        color: var(--white);
    }

    .footer__content{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .footer__content__links{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 12.5rem;
    }

    .mail{
        text-decoration: none;
    }

    .footer__buttons{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .button{
        text-decoration: none;
        width: 10rem;
        height: 2.5rem;
        background-color: var(--white);
        display: grid;
        place-items: center;
        border-radius: 5px;
        font-family: 'Bebas Neue', sans-serif;
        color: var(--black);
        font-size: 1.25rem;
        cursor: pointer;
    }
</style>