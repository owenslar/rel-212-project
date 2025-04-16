<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <router-link to="/" class="nav-left">Home</router-link>
        <router-link to="/about" class="nav-right">About</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; Owen's REL 212 Project</p>
    </footer>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

main {
  flex: 1;
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}

/* Footer styling */
footer {
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
}

/* Navbar layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  color: white;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Nav links */
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}

.navbar a:hover {
  text-decoration: underline;
}

/* Highlight active links */
nav a.router-link-active,
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
