<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Colossians</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    The church at Colossae had some serious problems as well, causing Paul to write a letter to the
    congregation. The church at Colossae was both overly concerned with the worship of angels, and
    suffering from an excess of syncretism. Syncretism is the mixing of religious views and cultural
    views into one world view. Because of an excess of syncretism, the church at Colossae was losing
    sight of the main focus of the church, which is Jesus Christ. Additionally, they were so
    accustomed to worshipping divine beings and were overly concerned with the many orders of
    Angels, that they were both wondering where Jesus fits in, but also losing sight of the fact
    that He is the central piece of our existence. Paul uses a popular "Christ-hymn" to remind the
    people that Jesus is above all of the angels. He is literally the image of God. If you are going
    to spend time worshipping a divine figure, it should be Jesus Christ, not any of the angels.
    Paul teaches that by Jesus "all things consist" meaning that Jesus literally holds the universe
    together. The angels are expendable, Jesus is not.
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    In this letter, Paul gives us some fantastic reminders of the divinity and importance of Jesus
    Christ. Not only did Jesus Christ make it possible for us to overcome death, only through Him
    can this universe exist. If there are any doubts of the importance of Jesus before reading
    Paul's epistle to the Colossians, they are completely gone by the end. The debate of Christology
    was also a popular topic around this time in history, and Paul is setting the precedent for the
    whole church that Jesus is absolutely divine. Understanding this letter leads to us becoming
    better disciples of Jesus Christ because the insights in this letter teach us so much about who
    Jesus is, and if we better understand Jesus, we can more easily deepen our relationship with
    Him.
  </div>
  <div class="center">
    <router-link to="/">
      <button class="card-button">Go Back</button>
    </router-link>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
  margin-top: 2rem;
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

.page-title {
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
}

.group-title {
  text-align: start;
  font-size: x-large;
  text-decoration: underline;
}

.group-text {
  text-align: start;
}
</style>
