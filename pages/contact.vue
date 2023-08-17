<template>
    <section class="contact__container">
        <h1>Contacteer ons hier</h1>
        <div class="content">
            <form class="contact__form">
                <div class="name__inputs">
                    <input type="text" id="firstname" name="firstname" placeholder="Voornaam *" required>
                    <input type="text" id="lastname" name="lastname" placeholder="Achternaam *" required>
                </div>
                <div class="contact__inputs">
                    <input type="email" id="email" name="email" placeholder="Email *" required>
                    <input type="text" id="phone" name="phone" placeholder="Telefoonnummer">
                </div>
                <textarea class="messageInput" id="message" name="message" placeholder="Bericht *" rows="5" required></textarea>
                <button type="submit">Verstuur</button>
            </form>

            <div class="detail__container">
                <div class="contact__info">
                    <h2>Contactinformatie</h2>
                    <p>August Van Landeghemplein 3, 2830 Willebroek <br>
                    info@stikr.be <br>
                    Tel.: +32 3 284 56 76 <br>
                    BE0688 896 869</p>
                </div>

                <div class="businessHours">
                    <h2>Openingsuren</h2>
                    <p>Maandag: 9.00 uur tot 17.30 uur <br>
                        Dinsdag: 9.00 uur tot 17.30 uur <br>
                        Woensdag: 9.00 uur tot 17.30 uur <br>
                        Donderdag: 9.00 uur tot 17.30 uur <br>
                        Vrijdag: 9.00 uur tot 15.30 uur <br>
                        Zaterdag & Zondag: gesloten</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
    h2{
        margin-bottom: 2rem;
    }

    .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        align-items: stretch;
        margin-bottom: 9.5rem;
    }

    .contact__form{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 60%;
        margin-right: 5rem;
        border-image: var(--gradientRedPurple) 30;
        border-width: 0.3rem;
        border-style: solid;
        border-image-outset: 0.15rem;
        padding: 3rem;
        box-sizing: border-box;
    }

    .detail__container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 40%;
        line-height: 150%;
    }

    .contact__info{
        margin-bottom: 4rem;
    }

    input[type=text], input[type=email]{
        width: clamp(12rem, 30vw, 19rem);
        height: 2.125rem;
    }

    .name__inputs, .contact__inputs, .messageInput{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .name__inputs, .contact__inputs{
        margin-bottom: 2rem;
    }

    .messageInput{
        padding-top: 0.8rem;
        height: 10rem;
    }

    input:focus, textarea:focus{
        outline: 2px solid var(--red);
    }

    button{
        width: 10rem;
        height: 2.125rem;
        background: var(--gradientRedPurple);
        border-radius: 4px;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        margin-top: auto;
    }
</style>