<template>
  <div class="leaderboard-container">
    <table class="leaderboard-table">
      <thead>
        <tr>
          <th class="text-left">Profile</th>
          <th class="text-right">Followers</th>
          <th class="text-right">Avg Daily Growth</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(person, index) in sortedPeople.slice(0, 25)"
          :key="person.username"
          :class="getRankClass(index)"
        >
          <td class="flex flex-nowrap content-center">
            <div class="mr-4 text-xl md:text-4xl content-center">
              {{ getRankEmoji(index) }}
            </div>
            <div class="content-center md:w-16 w-8 mr-4">
              <img :src="person.profileImageUrl" class="md:w-16 md:h-16 w-8 h-8 rounded-full inline-block" />
            </div>
            <a :href="'https://x.com/' + person.username" class="text-md font-semibold hover:underline align-middle" target="_blank">
              {{ person.name }} <span class="md:inline hidden">({{ person.username }})</span>
            </a>
          </td>
          <td class="text-right">
            {{ person.profileMetrics.followersCount }}
          </td>
          <td class="text-right">
            +{{ person.dailyFollowersGrowth.toFixed(0) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.leaderboard-table {
  border-width: collapse;
  width: 50em;
  max-width: 100%;
  margin: 0 auto;
}

.leaderboard-container th,
.leaderboard-container td {
  padding: .75em;
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

// load all the people
const { data: people } = await useAsyncData('people', () => queryContent('people').find());

people.value.forEach(person => {
  if (person.profileMetricsLog && person.profileMetricsLog.length > 1) {
    const logs = person.profileMetricsLog;
    const firstLog = logs[0];
    const lastLog = logs[logs.length - 1];
    const daysDifference = (new Date(lastLog.date) - new Date(firstLog.date)) / (1000 * 3600 * 24);
    if (daysDifference > 0) {
      const followersGrowth = lastLog.followersCount - firstLog.followersCount;
      person.dailyFollowersGrowth = followersGrowth / daysDifference;
      person.dailyFollowersGrowthPercentage = (followersGrowth / firstLog.followersCount) * 100 / daysDifference;
      person.dailyFollowersGrowthPercentage = person.dailyFollowersGrowthPercentage.toFixed();
    }
  }
});


const sortedPeople = computed(() => {
  return [...people.value].sort((a, b) => b.dailyFollowersGrowth - a.dailyFollowersGrowth);
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