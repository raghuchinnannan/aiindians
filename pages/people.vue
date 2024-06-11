<template>
  <section class="text-white">
    <div v-for="person in peopleData" :key="person.username" class="bg-gray-800 box border-b border-gray-700">
      <img :src="person.profileImageUrl" class="w-15 h-15 rounded-full">
      <div v-if="person.profileIsVerified">
        <span class="text-green-500">
          <Icon name="i-heroicons-badge-check-20-solid" class="inline-block w-5 h-5 mr-1" /> Verified
        </span>
      </div>
      <div>
        <a :href="`https://x.com/${person.username}`" target="_blank" rel="nofollow" class="hover:text-blue-500">
          <Icon name="i-fa6-brands-x-twitter" class="inline-block w-5 h-5 mr-1" /> {{ person.name }}
        </a>
      </div>
      <div v-if="person.profileUrl">
        <a :href="person.profileUrl" target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500">
          <Icon name="i-heroicons-user-circle-20-solid" class="inline-block w-5 h-5 mr-1" /> {{ person.profileUrl }}
        </a>
      </div>
      <div v-if="person.profileLocation">
        <span>
          <Icon name="i-heroicons-map-pin-20-solid" class="inline-block w-5 h-5 mr-1" /> {{ person.profileLocation }}
        </span>
      </div>
      <div v-if="person.profileDescription" class="text-sm my-2">{{ person.profileDescription }}</div>
      <a v-if="person.productUrl" :href="person.productUrl.startsWith('@') ? `https://x.com/${person.productUrl.substring(1)}` : person.productUrl" target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500">
        <Icon name="i-heroicons-link-20-solid" class="inline-block w-5 h-5 mr-1" /> Visit Product
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAsyncData } from 'nuxt/app'

const { data: peopleData } = await useAsyncData('people', () => queryContent('people').find())
</script>

<style scoped>
section {
  text-align: center;
  font-size: 1.125em;
  line-height: 2;
}

img {
  display: inline-block
}
</style>