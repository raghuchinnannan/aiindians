<template>
  <div class="communities-container">
    <p class="text-center">Friendly AI communities that can help you learn 🚀</p>
    <div
      v-for="community in communities"
      :key="community.url"
      class="box"
    >
      <div class="community-name">
        <a :href="community.url" rel="nofollow" target="_blank" class="flex flex-row justify-between">
          <div>
            <img :src="community.icon" class="w-10 h-10">
            {{ community.name }}
            <Icon name="i-fa6-brands-discord" />
          </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      communities: [
        { name: 'AI4Bharat by IIT Madras', url: 'https://discord.com/invite/3xSVWX9bER', type: 'discord', icon: 'https://cdn.discordapp.com/icons/1226862337101791352/be2e3989e1ac52318a35243de9ee67fe.webp?size=96' },
        { name: 'Dev Hub', url: 'https://discord.gg/SwTAY7QR', type: 'discord', icon: 'https://cdn.discordapp.com/icons/1114913976422256742/4a36b0c0b163796fcebcc1dd051913de.webp?size=96' },
      ]
    }
  }
}
</script>

<style scoped>
p {
  margin: 0 0 1em;
}

img {
  display: inline-block;
  margin-right: .5em;
}

a:hover {
  text-decoration: underline;
}
</style>