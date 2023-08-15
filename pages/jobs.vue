<template>
    <section class="jobs__container">
        <h2>Jobs</h2>

        <p>Stikr werft aan! Wij zoeken straffe kandidaten voor volgende jobs</p><br>
        <div class="job__list">
            <p class="bold purple">Belettering</p>
            <ol class="list list--lettering">
                <li>Junior beletteraar (via IBO)</li>
            </ol>
    
            <p class="bold purple">Printing operations</p>
            <ol class="list list--printing">
                <li>Print operator (Full time of 4/5de)</li>
            </ol>
        </div>

        <p><span class="bold purple">Niet gevonden wat je zocht?</span><br>
        Verras ons met jouw spontane sollicitatie, misschien zijn we toch naar jou op zoek. <br>
        Solliciteren kan via een mailtje naar <span class="bold red">katrien@stikr.be</span></p>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .jobs__container{
        margin-bottom: 9.5rem;
    }

    .list{
        list-style-type: disc;
        margin-bottom: 1.25rem;
    }
</style>