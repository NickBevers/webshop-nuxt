<template>
    <section class="jobs__container">
        <div>
            <h2>Jobs</h2>
    
            <p>Stikr werft aan! Wij zoeken straffe kandidaten voor volgende jobs</p><br>
            <div class="job__list">
                <p class="bold purple">Belettering</p>
                <ol class="list list--lettering">
                    <div class="job__container">
                        <li>Junior beletteraar (via IBO)</li>
                        <a href="https://drive.google.com/file/d/1-koAzxuTi8pTpXjydifzRyP43PLKgrQp/view" class="button jobLink" target="_blank">Bekijk de vacature</a>
                    </div>
                </ol>
        
                <p class="bold purple">Printing operations</p>
                <ol class="list list--printing">
                    <div class="job__container">
                        <li>Print operator (Full time of 4/5de)</li>
                        <a href="https://drive.google.com/file/d/1-giz9klWTefxa5qSOUttOLE1IBsKHUwm/view" class="button jobLink" target="_blank">Bekijk de vacature</a>
                    </div>
                </ol>
            </div>
    
            <p><span class="bold purple">Niet gevonden wat je zocht?</span><br>
            Verras ons met jouw spontane sollicitatie, misschien zijn we toch naar jou op zoek. <br>
            Solliciteren kan via een mailtje naar <span class="bold red">katrien@stikr.be</span></p>
        </div>

        <div class="job__image__container">
            <nuxt-img preload src="/images/character--white.svg" alt="jobs" width="300" height="300" class="job__image"/>
            <!-- <img src="~/assets/images/character--white.svg" alt="jobs" width="300" height="300" class="job__image"/> -->
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .jobs__container{
        margin-bottom: 9.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .list{
        list-style-type: disc;
        margin-bottom: 1.25rem;
        position: relative;
    }

    .job__container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .jobLink{
        display: grid;
        place-items: center;
        width: 10rem;
        height: 2.5rem;
        background: var(--gradientRedPurple);
        color: var(--white);
        font-family: var(--fontFamilyTitle);
        font-size: 1.2rem;
        box-sizing: border-box;
        padding-top: 0.2rem;
        border-radius: 3px;
    }

    .job__image__container{
        display: grid;
        place-items: center;
    }

    .job__image{
        transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
    }
</style>