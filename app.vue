<template>
  <div class="main-container">
    <Head>
      <title>AI Indians · Celebrating India’s AI Builders</title>
    </Head>
    <div class="hero">
      <div class="logo"><Icon name="i-ph-brain-thin" /> AI Indians</div>
      A resource to celebrate and stay updated with the latest AI projects & people in India.<br>
    </div>
    <nav>
      <NuxtLink
        v-for="menu in menus"
        :key="menu.slug"
        :to="menu.slug"
        class="link"
        :class="{ current: $route.path === menu.slug }"
      >
        {{ menu.icon }} {{ menu.name }}
      </NuxtLink>
    </nav>
    <h1 class="main-title" v-if="pageTitle">{{ pageTitle }}</h1>
    <NuxtPage />
    <footer class="colophon">
      <div class="flex mb-4">
        <div class="w-1/2 nav">
          <NuxtLink
            v-for="menu in menus"
            :key="menu.slug"
            :to="menu.slug"
            class="link"
          >
            &middot; {{ menu.name }}
          </NuxtLink>
        </div>
        <div class="w-1/2">
          <div class="logo"><Icon name="i-ph-brain-thin" /> AI Indians</div>
          <div>Source on <a href="https://github.com/namanyayg/aiindians" target="_blank">Github</a></div>
          <div>By <a href="https://x.com/NamanyayG">Namanyay Goel</a> ⚡</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body, html {
  margin: 0;
  line-height: 1.5;
  font-size: 100%;
}

.main-container {
  color: #FFFFFF;
  max-width: 60em;
  margin: 0 auto;
  padding: 0 1em;
  font-family: 'Space Grotesk', sans-serif;
}

a {
  transition: all .2s ease;
}

.hero {
  font-size: 1.25em;
  padding: 1rem 0 2rem;
  text-align: center;
  color: rgba(255,255,255,.8);
  line-height: 2;
}

.hero a {
  text-decoration: underline;
}

.logo {
  color: white;
  text-align: center;
  font-weight: 700;
}

.logo svg {
  transform: translateY(-.1em) scale(1.25);
  margin-right: .25em;
}

.main-title {
  font-weight: 600;
  font-size: 2em;
  text-align: center;
  padding: .5em 0;
}

.main-title:before {
  content: '//';
  opacity: .2;
  display: inline-block;
  transform: translateY(-.1em) translateX(-.4em);
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

nav a {
  display: inline-block;
  transition: all .3s ease;
  padding: 1em;
}

nav a:hover {
  transform: translateY(-.25em)
}

.link {
  color: #CBD5E0;
}

.current {
  background-color: rgba(255,255,255,.05);
  pointer-events: none;
  cursor: default;
}

.colophon {
  margin: 1em 0 0;
  padding: 3em;
  background-color: #2D3748;
  color: #CBD5E0;
  border-radius: 1em;
}

.colophon .logo {
  text-align: left;
}

.colophon .nav a {
  display: block;
  text-decoration: none;
}

.colophon a {
  text-decoration: underline;
}

.colophon a:hover {
  color: white;
}

.box {
  padding: 1.5em;
  border: 3px solid rgba(255,255,255, .1);
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.2));
  border-radius: 0.5em;
  margin: 0 0 1.5em;
}

@media (max-width: 60em) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 40em) {
  .hero {
    font-size: 1.125em;
  }

  nav {
    flex-direction: column;
    border: 2px solid rgba(255,255,255,.1);
    width: auto;
  }
}
</style>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      menus: [
        { slug: '/leaderboard', icon: '🏆', name: 'Leaderboard' },
        { slug: '/', icon: '💼', name: 'Projects' },
        { slug: '/people', icon: '🧗', name: 'People' },
        { slug: '/communities', icon: '👥', name: 'Communities' },
        { slug: '/contact', icon: '📩', name: 'Feedback' }
      ]
    }
  },
  computed: {
    pageTitle () {
      const currentMenu = this.menus.find(menu => menu.slug === this.$route.path);
      return currentMenu ? currentMenu.name : '';
    }
  }
}
</script>
