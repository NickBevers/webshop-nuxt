<template>
    <section class="project__container">
        <h1>{{ project.Title }}</h1>
        <p class="project__tags"><span v-for="tag in project.Tags" :key="tag" class="tag">{{ tag }}</span></p>

        <p class="project__description">{{ project.Description }}</p>

        <div class="project__image__container">
            <img v-for="image in project.Images" :key="image" :src="image" :alt="project.Title" class="project__image"/>
            <!-- <img v-for="image in project.Images" :key="image" :src="image" :alt="project.Title" class="project__image"/> -->
        </div>

        <div class="relatedProjects">
            <h3>Gelijkaardige projecten</h3>
            <div class="relatedProjects__container">
                <nuxt-link to="/projects/stikerWebsite" class="project__link">
                    <img src="~/assets/patterns/project--color.png" class="relatedProject__image" alt="Project 1" />
                    <!-- <img src="~/assets/patterns/project--color.png" class="relatedProject__image" alt="Project 1" /> -->
                </nuxt-link>
                <nuxt-link to="/projects/stikerWebsite" class="project__link">
                    <img src="~/assets/patterns/project--white.png" class="relatedProject__image" alt="Project 2" />
                    <!-- <img src="~/assets/patterns/project--white.png" class="relatedProject__image" alt="Project 2" /> -->
                </nuxt-link>
                <nuxt-link to="/projects/stikerWebsite" class="project__link">
                    <img src="~/assets/patterns/project--color.png" class="relatedProject__image" alt="Project 3" />
                    <!-- <img src="~/assets/patterns/project--color.png" class="relatedProject__image" alt="Project 3" /> -->
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import thumbnail from '~/assets/images/projects/thumbnail.png';
    import image1 from '~/assets/images/projects/image1.png';

    let project = {
        Title: 'Stikr Website',
        Description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempor mus vel scelerisque nulla suspendisse eu proin sit. Fermentum quam enim aenean erat viverra eu diam. Diam sed morbi nibh accumsan molestie euismod interdum. Odio purus augue ut elit. A neque phasellus eros adipiscing est lacinia maecenas. Ac tempor elit mauris viverra orci mattis mauris pharetra. Nascetur sed et posuere tincidunt blandit mi malesuada nibh risus. Id tristique nunc vitae tristique a. Duis dignissim eget consectetur rhoncus aliquam pharetra ut mi.',
        Images: [thumbnail, image1],
        Link: 'Project Link',
        Tags: ['Grafisch design']
    }
</script>

<style scoped>
    .project__container{
        position: relative;
    }

    .tag{
        color: var(--purple);

        position: absolute;
        top: -2rem;
    }

    .project__description{
        width: clamp(30rem, 100%, 40rem);
        margin-bottom: 3rem;
    }

    .project__image__container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 5rem;
    }
    
    .project__image{
        width: clamp(20rem, 100%, 37.5rem);
        margin-right: 2rem;
    }

    .relatedProjects{
        margin-bottom: 9.5rem;
    }

    .relatedProjects__container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .project__link{
        height: 15rem;
        overflow: hidden;
    }

</style>