<template>
  <section class="text-white">
    <div v-for="project in projects" :key="project.url" class="bg-gray-800 box border-b border-gray-700">
      <div class="flex items-center space-x-4 flex-col flex-col-reverse md:flex-row">
        <div class="basis-1/3 text-center md:text-left">
          <img :src="project.author.profileImageUrl" alt="Profile image" class="w-15 h-15 rounded-full">
          <div v-if="project.author.profileIsVerified">
            <span class="text-green-500">
              <Icon name="i-heroicons-badge-check-20-solid" class="inline-block w-5 h-5 mr-1" /> Verified
            </span>
          </div>
          <div>
            <a :href="`https://x.com/${project.author.username}`" target="_blank" rel="nofollow" class="hover:text-blue-500">
              <Icon name="i-fa6-brands-x-twitter" class="inline-block w-5 h-5 mr-1" /> {{ project.author.name }}
            </a>
          </div>
          <div v-if="project.author.profileUrl">
            <a :href="project.author.profileUrl" target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500">
              <Icon name="i-heroicons-user-circle-20-solid" class="inline-block w-5 h-5 mr-1" /> {{ project.author.profileUrl }}
            </a>
          </div>
          <div v-if="project.author.profileLocation">
            <span>
              <Icon name="i-heroicons-map-pin-20-solid" class="inline-block w-5 h-5 mr-1" /> {{ project.author.profileLocation }}
            </span>
          </div>
        </div>
        <div class="basis-2/3 text-center md:text-left mb-8 md:mb-0">
          <h3 class="text-lg font-semibold">{{ project.description }}</h3>
          <a :href="project.url" target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500">
            <Icon name="i-heroicons-link-20-solid" class="inline-block w-5 h-5 mr-1" /> Visit Project
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAsyncData } from 'nuxt/app'

const { data: projectsData } = await useAsyncData('projects', () => queryContent('projects').find())
const { data: peopleData } = await useAsyncData('people', () => queryContent('people').find())

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const projects = computed(() => {
  const shuffledProjects = shuffleArray(projectsData.value);
  return shuffledProjects.map(project => {
    const authorDetails = peopleData.value.find(person => person.username === project.author.username);
    return {
      ...project,
      author: {
        ...authorDetails,
        profileImageUrl: authorDetails.profileImageUrl,
        profileCreatedAt: authorDetails.profileCreatedAt,
        profileDescription: authorDetails.profileDescription,
        profileUrl: authorDetails.profileUrl,
        profileIsVerified: authorDetails.profileIsVerified,
        profileLocation: authorDetails.profileLocation
      }
    };
  });
});
</script>

<style scoped>
h3 {
  font-weight: 400;
}

img {
  display: inline-block
}
</style>