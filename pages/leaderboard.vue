<template>
  <div class="leaderboard-container">
    <div
      v-for="(person, index) in sortedPeople.slice(0, 25)"
      :key="person.username"
      :class="['leaderboard-entry', getRankClass(index)]"
    >
      <div class="flex">
        <div class="rank-icon">
          {{ getRankEmoji(index) }}
        </div>
        <img :src="person.profileImageUrl" class="w-16 h-16 rounded-full" />
      </div>
      <a :href="person.profileUrl" class="text-md font-semibold hover:underline" target="_blank">{{ person.name }}</a>
      <p class="text-sm">Followers: {{ person.profileMetrics.followersCount }}</p>
    </div>
  </div>
</template>

<style>
.leaderboard-container {
  white-space: nowrap;
  width: 40em;
  margin: 0 auto;
}

.leaderboard-entry {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0 1em 0;
  transition: all .3s ease;
  border-bottom: thin solid #101010;
  background: rgba(255, 255, 255, 0);
}

.leaderboard-entry:hover {
  background: rgba(255, 255, 255, .01);
}

.rank-icon {
  font-size: 2em; /* 32px */
  margin-right: 0.5em; /* 8px */
}

.gold {
  color: #FFD700; /* Gold color */
}

.silver {
  color: #C0C0C0; /* Silver color */
}

.bronze {
  color: #CD7F32; /* Bronze color */
}
</style>

<script setup>
import { computed } from 'vue';

const { data: people } = await useAsyncData('people', () => queryContent('people').find());

const sortedPeople = computed(() => {
  return [...people.value].sort((a, b) => b.profileMetrics.followersCount - a.profileMetrics.followersCount);
});

function getRankClass(index) {
  if (index === 0) return 'gold';
  if (index === 1) return 'silver';
  if (index === 2) return 'bronze';
  return '';
}

function getRankEmoji(index) {
  if (index === 0) return '🥇';
  if (index === 1) return '🥈';
  if (index === 2) return '🥉';
  return '🏅';
}
</script>