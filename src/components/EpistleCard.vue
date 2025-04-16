<template>
  <div :id="anchorId" class="card">
    <div class="card-title">{{ title }}</div>
    <img :src="image" :alt="alt" class="card-image" />
    <div class="card-content">
      <p>{{ description }}</p>
      <router-link :to="link" @click="rememberScroll">
        <button class="card-button">Learn More</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  alt: String,
  description: String,
  link: String,
  title: String,
  anchorId: String,
})

function rememberScroll() {
  if (props.anchorId) {
    sessionStorage.setItem('returnAnchor', props.anchorId)
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  margin-bottom: 1rem;
}

.card-title {
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.card-content {
  text-align: center;
}

.card-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #36976f;
}
</style>
